


function subcriptionSuccessTemplate(subcriptionID) {
    let template = ''

    template += `
    <h1>Hello</h1>
    <p><small>On 25 June 2023</small></p>
    <p>You have successfully subcribed to recieve our daily newsletter</p>
    <p>You recieve news about technology once a day. If you would like to customise how and how many times you wish to
        recieve news from us you can click the button below</p>
    <button>Customise Preferences</button>
    <h1>${subcriptionID}</h1>
    `
    return template;
}

module.exports = subcriptionSuccessTemplate