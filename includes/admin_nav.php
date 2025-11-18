
<?php if (!isset($no_nav)): ?>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand" href="dashboard.php">BookStore Admin</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto">
                <li class="nav-item">
                    <a class="nav-link" href="dashboard.php"><i class="bi bi-speedometer2"></i> Dashboard</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="books.php"><i class="bi bi-book"></i> Books</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="categories.php"><i class="bi bi-tags"></i> Categories</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="users.php"><i class="bi bi-people"></i> Users</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="orders.php"><i class="bi bi-cart"></i> Orders</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="messages.php"><i class="bi bi-envelope"></i> Messages</a>
                </li>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="../index.php"><i class="bi bi-house"></i> View Store</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../logout.php"><i class="bi bi-box-arrow-right"></i> Logout</a>
                </li>
            </ul>