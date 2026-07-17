const navbar = document.getElementById("navbar");
const footer = document.getElementById("footer");
const toolList = document.getElementById("toolList");
const homeToolList = document.getElementById("homeToolList");

// Helper to determine root path for assets & links
function root() {
    return location.pathname.includes("/tools/") ? "../" : "";
}

/* ---------------- Navbar Render ---------------- */
if (navbar) {
    const r = root();

    navbar.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-body border-bottom sticky-top shadow-sm">
        <div class="container">
            <a class="navbar-brand fw-bold" href="${r}index.html">
                <i class="fa-solid fa-screwdriver-wrench text-primary me-2"></i>Ragu Tools
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="mainNav">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="${r}index.html">
                            <i class="fa-solid fa-house me-1"></i> Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="${r}tools/index.html">
                            <i class="fa-solid fa-table-cells me-1"></i> All Tools
                        </a>
                    </li>
                </ul>

                <div class="d-flex align-items-center gap-2">
                    <select id="themeSwitcher" class="form-select form-select-sm" aria-label="Select Theme">
                        <option value="system">💻 System</option>
                        <option value="light">☀ Light</option>
                        <option value="dark">🌙 Dark</option>
                    </select>

                    <a class="btn btn-outline-secondary btn-sm" href="https://github.com/Ragug/ragu-tools" target="_blank" rel="noopener" title="GitHub Repository">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
    </nav>
    `;
}

/* ---------------- Footer Render ---------------- */
if (footer) {
    footer.innerHTML = `
    <footer class="py-4 border-top bg-body mt-auto">
        <div class="container text-center">
            <p class="mb-1">
                <a href="https://github.com/Ragug/ragu-tools" target="_blank" rel="noopener" class="text-decoration-none text-body fw-medium">
                    <i class="fab fa-github me-1 text-primary"></i> Source Code Available on GitHub
                </a>
            </p>
            <p class="text-body-secondary small mb-1">
                Licensed under the Apache License 2.0
            </p>
            <small class="text-body-secondary">
                © ${new Date().getFullYear()} Ragu Tools. All rights reserved.
            </small>
        </div>
    </footer>
    `;
}

/* ---------------- Theme Selector Binding ---------------- */
const selector = document.getElementById("themeSwitcher");

if (selector && typeof Theme !== "undefined") {
    selector.value = Theme.get();
    selector.addEventListener("change", function () {
        Theme.set(this.value);
    });
}

/* ---------------- Tool Cards Renderers ---------------- */
// 1. Full Tools Directory Page
if (toolList && typeof TOOLS !== "undefined") {
    const r = root();
    toolList.innerHTML = "";

    TOOLS.forEach(tool => {
        toolList.innerHTML += `
        <div class="col-md-6 col-lg-4">
            <a href="${r}tools/${tool.page}" class="text-decoration-none text-body">
                <div class="card tool-card h-100 shadow-sm border">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <i class="fa-solid ${tool.icon} fs-4 text-primary"></i>
                            <span class="badge badge-category">${tool.category}</span>
                        </div>
                        <h5 class="card-title fw-bold text-body">${tool.name}</h5>
                        <p class="card-text text-body-secondary small mb-0">${tool.description}</p>
                    </div>
                </div>
            </a>
        </div>
        `;
    });
}

// 2. Homepage Tool List Section
if (homeToolList && typeof TOOLS !== "undefined") {
    const r = root();
    homeToolList.innerHTML = "";

    TOOLS.slice(0, 6).forEach(tool => {
        homeToolList.innerHTML += `
        <div class="col-md-6 col-lg-4">
            <a href="${r}tools/${tool.page}" class="tool-link-card">
                <div class="card h-100 shadow-sm p-2">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <i class="fa-solid ${tool.icon} fs-4 text-primary"></i>
                            <span class="badge badge-category">${tool.category}</span>
                        </div>
                        <h3 class="h6 card-title fw-bold text-body mb-2">${tool.name}</h3>
                        <p class="card-text text-body-secondary small mb-0">${tool.description}</p>
                    </div>
                </div>
            </a>
        </div>
        `;
    });
}
