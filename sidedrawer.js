const view = require("ui/core/view");
drawer = view.getViewById(page, "sideDrawer");
function toggleDrawer() {
    drawer.toggleDrawerState();
};
exports.toggleDrawer = toggleDrawer
