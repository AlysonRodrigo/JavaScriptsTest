$(() => {
  const stylingMode = readStylingMode() || 'filled';
  DevExpress.config({
    editorStylingMode: stylingMode,
  });
  $(function () {
    $("#htmlEditorContainer").dxHtmlEditor({
      toolbar: {
        items: [
          { name: "undo", location: "center" },
          { name: "redo", location: "center" },
          { name: "color", location: "center" },
          { name: "background", location: "center" }
        ]
      }
    });

    const name = $('#name').dxTextBox({
      value: '',
      width: '100%',
      placeholder: '',
      label: 'Nome',
    }).dxValidator({
      validationRules: [{
        type: 'required',
      }],
    }).dxTextBox('instance');

    const place = $('#address').dxTextBox({
      width: '100%',
      placeholder: '',
      label: 'Local',
    }).dxValidator({
      validationRules: [{
        type: 'required',
      }],
    }).dxTextBox('instance');

    const birthDate = $('#birthDate').dxDateBox({
      width: '100%',
      label: 'Data',
      moveTo:"50%",
      placeholder: 'mm/dd/yyyy',
      value: '',
    }).dxValidator({
      validationRules: [{
        type: 'required',
      }],
    });

    const hireDate = $('#hireDate').dxDateBox({
      width: '100%',
      label: 'Data de contrato',
      placeholder: '',
    }).dxValidator({
      validationRules: [{
        type: 'required',
      }],
    }).dxDateBox('instance');

    const state = $('#state').dxSelectBox({
      items: states,
      width: '100%',
      placeholder: 'Select...',
      label: 'Estado',
    }).dxValidator({
      validationRules: [{
        type: 'required',
      }],
    }).dxSelectBox('instance');

    const position = $('#position').dxTagBox({
      items: positions,
      value: ['Support Manager'],
      placeholder: 'Selecione...',
      multiline: false,
      width: '100%',
      label: 'Position',
    }).dxValidator({
      validationRules: [{
        type: 'required',
      }],
    }).dxTagBox('instance');

    const phone = $('#phone').dxTextBox({
      width: '100%',
      label: 'Telefone',
      mask: '+55 (00) 00000-0000',
      maskRules: {
        X: /[02-9]/,
      },
    }).dxValidator({
      validationRules: [{
        type: 'required',
      }],
    }).dxTextBox('instance');

    const notes = $('#notes').dxTextArea({
      value: '',
      width: '100%',
      label: 'Notes',
    }).dxTextArea('instance');

    $('#validate').dxButton({
      text: 'Salvar',
      type: 'default',
      onClick(e) {
        const result = e.validationGroup.validate();
        if (result.isValid) {
          Swal.fire(
            'Cadastro realizado com Sucesso',
            '',
            'success'
          )
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Os Campos são Obrigatorio!',

          })
        }
      },
    });

    $('#simple').val('');

  });
});
const storageKey = 'editorStylingMode';
function readStylingMode() {
  const mode = localStorage.getItem(storageKey);
  localStorage.removeItem(storageKey);
  return mode;
}
function writeStylingMode(mode) {
  localStorage.setItem(storageKey, mode);
  window.location.reload(true);
}
const positions = [
  'HR Manager',
  'IT Manager',
  'CEO',
  'Controller',
  'Sales Manager',
  'Support Manager',
  'Shipping Manager',
];
const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF'];
