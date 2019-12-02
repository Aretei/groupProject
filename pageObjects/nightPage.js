module.exports = {
    url: 'https://nightwatchjs.org/',
    elements: {
        developerGuide: {
            selector: '(//a[@href="/guide"])[2]',
            locateStrategy: 'xpath'
        },
        gettingStarted: {
            selector: '(//a[@href="/gettingstarted"])[2]',
            locateStrategy: 'xpath'
        },
        apiReference: {
            selector: '(//a[@href="/gettingstarted"])[2]',
            locateStrategy: 'xpath'
        },
        assert: {
            selector: '(//a[@href="/api/"])[1]',
            locateStrategy: 'xpath'
        },
        attributeContains: '//a[@href="#assert-attributeContains"]',
        attributeEquals: '//a[@href="#assert-attributeEquals"]',
        containsText: '//a[@href="#assert-containsText"]',
        cssClassPresent: '//a[@href="#assert-cssClassPresent"]',
        cssProperty: '//a[@href="#assert-cssProperty"]',
        domPropertyContains: '//a[@href="#assert-domPropertyContains"]',
        domPropertyEquals: '//a[@href="#assert-domPropertyEquals"]',
        elementPresent: '//a[@href="#assert-elementPresent"]',
        title: '//a[@href="#assert-title"]',
        urlContains: '//a[@href="#assert-urlContains"]',
        urlEquals: '//a[@href="#assert-urlEquals"]',
        value: '//a[@href="#assert-value"]',
        valueContains: '//a[@href="#assert-valueContains"]',
        visible: '//a[@href="#assert-visible"]',
        attributeContainsTitle: '',
        attributeEqualsTitle: '',
        containsTextTitle: '',

    }
}