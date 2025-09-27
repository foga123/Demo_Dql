// Simple Demo - No Functions, Just Display
document.addEventListener('DOMContentLoaded', function() {
    const app = document.getElementById('app');
    
    // Landing Page Content
    app.innerHTML = `
        <div class="navbar">
            <div class="nav-brand">DQL</div>
            <div class="nav-buttons">
                <button onclick="document.getElementById('login').style.display='block'">Login</button>
                <button onclick="document.getElementById('signup').style.display='block'">Sign Up</button>
            </div>
        </div>
        
        <div class="main">
            <h1>Welcome to DQL</h1>
            <p>landing page</p>
            <button onclick="document.getElementById('login').style.display='block'">Get Started</button>
            <button onclick="document.getElementById('signup').style.display='block'">Sign Up</button>
        </div>
        
        <div id="login" class="modal" style="display:none">
            <div class="modal-content">
                <h2>Login</h2>
                <span onclick="document.getElementById('login').style.display='none'">&times;</span>
                <input type="text" placeholder="Email">
                <input type="password" placeholder="Password">
                <button onclick="showAdmin()">Login</button>
            </div>
        </div>
        
        <div id="signup" class="modal" style="display:none">
            <div class="modal-content">
                <h2>Sign Up</h2>
                <span onclick="document.getElementById('signup').style.display='none'">&times;</span>
                <input type="text" placeholder="Name">
                <input type="text" placeholder="Email">
                <input type="password" placeholder="Password">
                <button onclick="showAdmin()">Sign Up</button>
            </div>
        </div>
    `;
});

// Show Admin - Simple Display
function showAdmin() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="admin-header">
            <h1>Admin Dashboard</h1>
            <button onclick="location.reload()">Logout</button>
        </div>
        
        <div class="admin-nav">
            <button onclick="showDashboard()">Dashboard</button>
            <button onclick="showUsers()">Users</button>
            <button onclick="showSettings()">Settings</button>
        </div>
        
        <div id="content" class="admin-content">
            <h2>Dashboard</h2>
            <div class="stats">
                <div>Total Users: 1,234</div>
                <div>Active: 89</div>
                <div>Revenue: $12,345</div>
            </div>
        </div>
    `;
}

// Show Dashboard
function showDashboard() {
    document.getElementById('content').innerHTML = `
        <h2>Dashboard</h2>
        <div class="stats">
            <div>Total Users: 1,234</div>
            <div>Active Sessions: 89</div>
            <div>Revenue: $12,345</div>
        </div>
    `;
}

// Show Users
function showUsers() {
    document.getElementById('content').innerHTML = `
        <h2>Users</h2>
        <table>
            <tr><th>ID</th><th>Name</th><th>Email</th></tr>
            <tr><td>1</td><td>John Doe</td><td>john@example.com</td></tr>
            <tr><td>2</td><td>Jane Smith</td><td>jane@example.com</td></tr>
        </table>
    `;
}

// Show Settings
function showSettings() {
    document.getElementById('content').innerHTML = `
        <h2>Settings</h2>
        <div class="form">
            <input type="text" value="Demo App" placeholder="Site Name">
            <input type="email" value="admin@demo.com" placeholder="Admin Email">
            <button>Save</button>
        </div>
    `;
}