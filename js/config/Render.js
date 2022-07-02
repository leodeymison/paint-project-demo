const optionsListData = {
    forms: [
        {
            active: true,
            name: 'linhaLivre',
            icon: 'https://th.bing.com/th/id/OIP.Gz_IGLnvHYsRiu82gw68bQHaHa?pid=ImgDet&rs=1',
            description: 'pintando online, linha reta'
        },
        {
            active: false,
            name: 'auadrado',
            icon: '',
            description: '???'
        },
        {
            active: false,
            name: '',
            icon: '',
            description: '???'
        },
        {
            active: false,
            name: 'lupa',
            icon: 'img/lupa.png',
            description: 'Lupa para dar zoom'
        },
        {
            active: false,
            name: 'text',
            icon: 'img/Aa.png',
            description: 'Para colocar textos'
        },
    ]
}

export function Render(){
    const optionForms = document.getElementById('renderOptions')
    optionsListData.forms.forEach(form => {
        optionForms.innerHTML = `
        <div class="obj-blc ${form.active ? 'active' : 'noactive'}" onclick="console.log('ok')" >
            <img src="${form.icon}" alt="${form.description}">
        </div>
        `
    })
}