function loadFont() {
    const fontUpload = document.getElementById('font-upload').files[0];
    if (fontUpload) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const fontFace = new FontFace('UploadedFont', event.target.result);
            document.fonts.add(fontFace);
            fontFace.load().then(() => {
                document.body.style.fontFamily = 'Maru Gothic, sans-serif'; // デフォルトのフォントを設定
            });
        };
        reader.readAsArrayBuffer(fontUpload);
    }
}

function createDictionary() {
    const dictionaryName = document.getElementById('new-dictionary-name-input').value.trim();
    if (dictionaryName && !dictionaries[dictionaryName]) {
        dictionaries[dictionaryName] = [];
        const select = document.getElementById('select-dictionary');
        const option = document.createElement('option');
        option.value = dictionaryName;
        option.textContent = dictionaryName;
        select.appendChild(option);
        select.value = dictionaryName;
        selectDictionary(); // 新しい辞書を選択する
        saveDictionary(); // 辞書作成後に保存
    }
}

function createDictionary() {
    const dictionaryName = document.getElementById('new-dictionary-name-input').value.trim();
    if (dictionaryName && !dictionaries[dictionaryName]) {
        dictionaries[dictionaryName] = [];
        const select = document.getElementById('select-dictionary');
        const option = document.createElement('option');
        option.value = dictionaryName;
        option.textContent = dictionaryName;
        select.appendChild(option);
        select.value = dictionaryName;
        selectDictionary(); // 新しい辞書を選択する
        saveDictionary(); // 辞書作成後に保存
    }
}
