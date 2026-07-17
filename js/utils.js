// utils.js

const Theme = (() => {

    const STORAGE_KEY = "theme";

    /**
     * Apply a theme.
     * theme = "light" | "dark" | "system"
     */
    function apply(theme) {

        if (theme === "system") {
            const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

            document.documentElement.setAttribute(
                "data-bs-theme",
                systemDark ? "dark" : "light"
            );

            return;
        }

        document.documentElement.setAttribute("data-bs-theme", theme);
    }

    /**
     * Get saved theme.
     */
    function get() {
        return localStorage.getItem(STORAGE_KEY) || "system";
    }

    /**
     * Save and apply.
     */
    function set(theme) {
        localStorage.setItem(STORAGE_KEY, theme);
        apply(theme);
    }

    /**
     * Initialize theme.
     */
    function init() {

        apply(get());

        // Follow system theme if using "system"
        window.matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", () => {

                if (get() === "system") {
                    apply("system");
                }

            });
    }

    return {
        init,
        get,
        set
    };

})();

document.addEventListener("DOMContentLoaded", Theme.init);
