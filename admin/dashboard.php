```php
<?php
require_once '../config/database.php';
require_once '../includes/auth.php';

redirectIfNotLoggedIn();
redirectIfNotAdmin();

// Get counts for dashboard
$stmt = $pdo->query("SELECT COUNT(*) FROM books");
$book_count = $stmt->fetchColumn();

$stmt = $pdo->query("SELECT COUNT(*) FROM users WHERE is_admin = FALSE");
$user_count = $stmt->fetchColumn();

$stmt = $pdo->query("SELECT COUNT(*) FROM orders");
$order_count = $stmt->fetchColumn();

$stmt = $pdo->query("SELECT COUNT(*) FROM categories");
$category_count = $stmt->fetchColumn();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Admin Dashboard - BookStore</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
</head>
<body>
    <?php include '../includes/admin_nav.php'; ?>
    
    <div class="container mt-4">
        <h2>Admin Dashboard</h2>
        
        <div class="row mt-4">
            <div class="col-md-3">
                <div class="card text-white bg-primary mb-3">
                    <div class="card-body">
                        <h5 class="card-title">Books</h5>
                        <p class="card-text display-4"><?= $book_count ?></p>
                        <a href="books.php" class="text-white">View Books</a>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card text-white bg-success mb-3">
                    <div class="card-body">
                        <h5 class="card-title">Users</h5>
                        <p class="card-text display-4"><?= $user_count ?></p>
                        <a href="users.php" class="text-white">View Users</a>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card text-white bg-warning mb-3">
                    <div class="card-body">
                        <h5 class="card-title">Orders</h5>
                        <p class="card-text display-4"><?= $order_count ?></p>
                        <a href="orders.php" class="text-white">View Orders</a>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card text-white bg-info mb-3">
                    <div class="card-body">
                        <h5 class="card-title">Categories</h5>
                        <p class="card-text display-4"><?= $category_count ?></p>
                        <a href="categories.php" class="text-white">View Categories</a>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="card mt-4">
            <div class="card-header">
                Recent Orders
            </div>
            <div class="card-body">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>User</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        $stmt = $pdo->query("
                            SELECT o.id, u.username, o.order_date, o.total_amount, o.status 
                            FROM orders o
                            JOIN users u ON o.user_id = u.id
                            ORDER BY o.order_date DESC
                            LIMIT 5
                        ");
                        while ($order = $stmt->fetch()):
                        ?>
                        <tr>
                            <td><?= $order['id'] ?></td>
                            <td><?= $order['username'] ?></td>
                            <td><?= date('M d, Y', strtotime($order['order_date'])) ?></td>
                            <td>$<?= number_format($order['total_amount'], 2) ?></td>
                            <td>
                                <span class="badge bg-<?= 
                                    $order['status'] === 'pending' ? 'warning' : 
                                    ($order['status'] === 'shipped' ? 'primary' : 
                                    ($order['status'] === 'delivered' ? 'success' : 'danger')) 
                                ?>">
                                    <?= ucfirst($order['status']) ?>
                                </span>
                            </td>
                        </tr>
                        <?php endwhile; ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</body>
</html>
```