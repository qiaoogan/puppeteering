const { elementClearValue } = require('../utils/element.utils');

class AccountSettingPage {
    constructor(page) {
        this.page = page;
    };

    elements = {
        firstNameField: ".v-col-md-6.v-col-12:nth-child(1) input",
        lastNameField:  ".v-col-md-6.v-col-12:nth-child(2) input",
        emailField:  ".v-col-md-6.v-col-12:nth-child(3) input",
        organizationField: ".v-col-md-6.v-col-12:nth-child(4) input",
        phoneNumberField: ".v-col-md-6.v-col-12:nth-child(5) input",
        addressField: ".v-col-md-6.v-col-12:nth-child(6) input",
        stateField: ".v-col-md-6.v-col-12:nth-child(7) input",
        zipCodeField: ".v-col-md-6.v-col-12:nth-child(8)",
        countrySelect: ".v-col-md-6.v-col-12:nth-child(9)",
        languageSelect: ".v-col-md-6.v-col-12:nth-child(10)",
        timeZoneSelect: ".v-col-md-6.v-col-12:nth-child(11)",
        currencySelect: ".v-col-md-6.v-col-12:nth-child(12)",

        saveButton: "#app > div > div > div > div.layout-content-wrapper > main > div > div > div.v-window.v-theme--light.mt-5.disable-tab-transition > div > div.v-window-item.v-window-item--active > div > div:nth-child(1) > div > div:nth-child(5) > div > form > div > div.v-col.v-col-12.d-flex.flex-wrap.gap-4 > button.v-btn.v-btn--elevated.v-theme--light.bg-primary.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated",
        resetButton: "#app > div > div > div > div.layout-content-wrapper > main > div > div > div.v-window.v-theme--light.mt-5.disable-tab-transition > div > div.v-window-item.v-window-item--active > div > div:nth-child(1) > div > div:nth-child(5) > div > form > div > div.v-col.v-col-12.d-flex.flex-wrap.gap-4 > button.v-btn.v-theme--light.text-secondary.v-btn--density-default.v-btn--size-default.v-btn--variant-tonal"

    };

    actions = {
        inputFirstName: async(firstName) => {
            await elementClearValue(this.page, this.elements.firstNameField);
            return await this.page.locator(this.elements.firstNameField).fill(firstName);
        },

        inputLastName: async(lastName) => {
            await elementClearValue(this.page, this.elements.lastNameField);
            return await this.page.locator(this.elements.lastNameField).fill(lastName);
        },

        inputEmail: async(email) => {
            await elementClearValue(this.page, this.elements.emailField);
            return await this.page.locator(this.elements.emailField).fill(email);
        },

        inputOrganization: async(organization) => {
            await elementClearValue(this.page, this.elements.organizationField);
            return await this.page.locator(this.elements.organizationField).fill(organization);
        },

        inputPhoneNumber: async(phoneNumber) => {
            await elementClearValue(this.page, this.elements.phoneNumberField);
            return await this.page.locator(this.elements.phoneNumberField).fill(phoneNumber);
        },

        inputAddress: async(address) => {
            await elementClearValue(this.page, this.elements.addressField);
            return await this.page.locator(this.elements.addressField).fill(address);
        },

        inputState: async(state) => {
            await elementClearValue(this.page, this.elements.stateField);
            return await this.page.locator(this.elements.stateField).fill(state);
        },

        inputZipCode: async(zipCode) => {
            await elementClearValue(this.page, this.elements.zipCodeField);
            return await this.page.locator(this.elements.zipCodeField).fill(zipCode);
        },

        selectCountry: async(country) => {
            return await this.page.locator(this.elements.countrySelect).fill(country);
        },

        selectLanguage: async(language) => {
            return await this.page.select(this.elements.languageSelect, language);
        },

        selectTimeZone: async(timeZone) => {
            return await this.page.locator(this.elements.timeZoneSelect).fill(timeZone);
        },

        selectCurrency: async(currency) => {
            return await this.page.locator(this.elements.currencySelect).fill(currency);
        },

        clickSaveButton: async() => {
            return await this.page.locator(this.elements.saveButton).click();
        },

        clickResetButton : async() => {
            return await this.page.locator(this.elements.resetButton).click();
        }

    };

    checks = {};

    procedures = {};
}

module.exports = AccountSettingPage;