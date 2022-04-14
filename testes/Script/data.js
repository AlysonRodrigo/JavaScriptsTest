$(() => {
    let selectedRowIndex = -1;
    $('#action-add').dxSpeedDialAction({
      label: 'Adicionar',
      icon: 'add',
      index: 1,
      onClick() {
        grid.addRow();
        grid.deselectAll();
      },
    }).dxSpeedDialAction('instance');
  
    const deleteSDA = $('#action-remove').dxSpeedDialAction({
      icon: 'trash',
      label: 'Delete',
      index: 2,
      visible: false,
      onClick() {
        grid.deleteRow(selectedRowIndex);
        grid.deselectAll();
      },
    }).dxSpeedDialAction('instance');
  
    const editSDA = $('#action-edit').dxSpeedDialAction({
      label: 'Editar',
      icon: 'edit',
      index: 3,
      visible: false,
      onClick() {
        grid.deselectAll();
      },
    }).dxSpeedDialAction('instance');
  
    const grid = $('#grid').dxDataGrid({
      dataSource: employees,
      showBorders: true,
      keyExpr: 'ID',
      selection: {
        mode: 'single',
      },
      paging: {
        enabled: false,
      },
      editing: {
        mode: 'popup',
        texts: {
          confirmDeleteMessage: '',
        },
      },
      onSelectionChanged(e) {
        selectedRowIndex = e.component.getRowIndexByKey(e.selectedRowKeys[0]);
  
        deleteSDA.option('visible', selectedRowIndex !== -1);
        editSDA.option('visible', selectedRowIndex !== -1);
        grid.editRow(selectedRowIndex);
        

      },
      columns: [
        {
          dataField: 'Prefixo',
          caption: 'Titulo',
        },
        'PrimeiroNome',
        'UltimoNome',
        {
          dataField: 'position',
          width: 130,
        }, {
          dataField: 'StateID',
          caption: 'State',
          width: 125,
          lookup: {
            dataSource: states,
            displayExpr: 'Name',
            valueExpr: 'ID',
          },
        }, {
          dataField: 'Nascimento',
          dataType: 'Contratacao',
          width: 125,
        },
      ],
    }).dxDataGrid('instance');
  
    $('#direction').dxSelectBox({
      dataSource: ['auto', 'cima', 'baixo'],
      value: 'auto',
      onSelectionChanged(e) {
        DevExpress.config({
          floatingActionButtonConfig: directions[e.selectedItem],
        });
  
        DevExpress.ui.repaintFloatingActionButton();
      },
    });
  });
  
  
  const directions = {
    auto: {
      icon: 'rowfield',
      shading: true,
      position: {
        of: '#grid',
        my: 'right bottom',
        at: 'right bottom',
        offset: '-16 -16',
      },
    },
    up: {
      icon: 'rowfield',
      shading: true,
      direction: 'cima',
      position: {
        of: '#grid',
        my: 'right bottom',
        at: 'right bottom',
        offset: '-16 -16',
      },
    },
    down: {
      icon: 'rowfield',
      shading: true,
      direction: 'baixo',
      position: {
        of: '.dx-datagrid-rowsview',
        my: 'right top',
        at: 'right top',
        offset: '-16 16',
      },
    },
  };
  
  const employees = [{
    ID: 1,
    PrimeiroNome: 'John',
    UltimoNome: 'Heart',
    Prefixo: 'Mr.',
    Posicao: 'CEO',
    Nascimento: '1964/03/16',
    Contratacao: '1995/01/15',
    StateID: 5,
  }];
  
  const states = [{
    ID: 1,
    Name: 'Acre',
  }, {
    ID: 2,
    Name: 'Alagoas',
  }, {
    ID: 3,
    Name: 'Amapá',
  }, {
    ID: 4,
    Name: 'Amazonas',
  }, {
    ID: 5,
    Name: 'Bahia',
  }, {
    ID: 6,
    Name: 'Ceará',
  }, {
    ID: 7,
    Name: 'Espírito Santo',
  }, {
    ID: 8,
    Name: 'Goiás',
  }, {
    ID: 9,
    Name: 'Maranhão',
  }, {
    ID: 10,
    Name: 'Mato Grosso',
  }, {
    ID: 11,
    Name: 'Mato Grosso do Sul ',
  }, {
    ID: 12,
    Name: 'Minas Gerais',
  }, {
    ID: 13,
    Name: 'Pará',
  }, {
    ID: 14,
    Name: 'Paraíba',
  }, {
    ID: 15,
    Name: 'Paraná',
  }, {
    ID: 16,
    Name: 'Pernambuco',
  }, {
    ID: 17,
    Name: 'Piauí',
  }, {
    ID: 18,
    Name: 'Rio de Janeiro',
  }, {
    ID: 19,
    Name: 'Rio Grande do Norte',
  }, {
    ID: 20,
    Name: 'Rio Grande do Sul ',
  }, {
    ID: 21,
    Name: 'Rondônia',
  }, {
    ID: 22,
    Name: 'Santa Catarina',
  }, {
    ID: 23,
    Name: 'São Paulo',
  }, {
    ID: 24,
    Name: 'Sergipe',
  }, {
    ID: 25,
    Name: 'Tocantins',
  }, {
    ID: 26,
    Name: 'Distrito Federal',
  }];
  