class DashboardPage {
    constructor(page) {
        this.page = page;
    };

    elements = {
        congratsLabel: "#app > div > div > div > div.layout-content-wrapper > main > div > div > div:nth-child(1) > div > div.v-row.v-row--no-gutters > div.v-col-sm-8.order-sm-1.v-col-12.order-2 > div.v-card-item > div > div",
        viewBadgesButton: "#app > div > div > div > div.layout-content-wrapper > main > div > div > div:nth-child(1) > div > div.v-row.v-row--no-gutters > div.v-col-sm-8.order-sm-1.v-col-12.order-2 > div.v-card-text > button"
    };


    actions = {
        clickViewBadgesButton: async () => {
            return await this.page.locator(this.elements.viewBadgesButton).click();
        }

    };

    checks = {};

    procedures = {};
}

module.exports = DashboardPage;