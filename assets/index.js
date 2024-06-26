var data_import = document.getElementById('import-data')
var data_export = document.getElementById('export-data')
var selected = document.querySelector('select')
var clear_btn = document.querySelector('.clear-data-input-btn');
var copy_export_btn = document.querySelector('.copy-export-btn')
var copy_import_btn = document.querySelector('.copy-import-btn')




var convert_btn = document.querySelector('.convert-data-btn')
var convert_back_btn = document.querySelector('.convert-data-back-btn')

//convert-btn
convert_btn.addEventListener('click', () => {
    let option;
    switch (selected.selectedIndex) {
        case 0:
            option = ','
            break;
        case 1:
            option = ';'
            break;
        case 2:
            option = '|'
            break;
        case 3:
            option = ' '
            break;
        case 4:
            option = '\n'
            break;
        default:
            break;
    }
    let data = data_import.value.split("\n")
    data = data.filter((value) => value !== "")
    // data = data.map(item => {
    //     if (item.includes(' ')) {
    //         return item.split(' ').filter(subItem => subItem.trim() !== '');
    //     } else {
    //         return [item];
    //     }
    // }).flat();
    data_export.value = data.join(option)
})


//convert_back-btn
convert_back_btn.addEventListener('click', () => {
    let option;
    switch (selected.selectedIndex) {
        case 0:
            option = ','
            break;
        case 1:
            option = ';'
            break;
        case 2:
            option = '|'
            break;
        case 3:
            option = ' '
            break;
        case 4:
            option = '\n'
            break;
        default:
            break;
    }
    let data = data_export.value.split(option)
    data = data.filter((value) => value !== "")
    data_import.value = data.join('\n')
})

//copy-export-btn
copy_export_btn.addEventListener('click', () => {
    if(data_export) {
        data_export.select();
        data_export.setSelectionRange(0, 99999);
        document.execCommand("copy");
    }
})

//copy-import-btn
copy_import_btn.addEventListener('click', () => {
    if(data_import) {
        data_import.select();
        data_import.setSelectionRange(0, 99999);
        document.execCommand("copy");
    }
})

//clear-btn
clear_btn.addEventListener('click', () => {
    data_import.value = '';
    data_export.value = '';
})