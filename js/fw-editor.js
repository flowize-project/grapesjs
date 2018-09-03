var spinner_messages = ['Please wait, while we work our Magic!...', 'Preparing the content...Please only a few steps more...', 'Almost done!...'];

var host = 'http://artf.github.io/grapesjs/';
var images = [
    host + 'img/grapesjs-logo.png',
    host + 'img/tmp-blocks.jpg',
    host + 'img/tmp-tgl-images.jpg',
    host + 'img/tmp-send-test.jpg',
    host + 'img/tmp-devices.jpg',
];


var editor = grapesjs.init({
    clearOnRender: true,
    showDevices: false,
    allowScripts: false,
    autorender: false,
    devicePreviewMode: 1,
    height: '100%',
    container : '#gjs',
    forceClass: true,
    fromElement: false,
    showOffsets: 1,
    noticeOnUnload: false,
    exportWrapper: false, // Allow you to export body attributes and html header
    commands: {
        defaults: [
            window['grapesjs-code-editor'].codeCommand,
        ],
    },
    panels: window['grapesjs-code-editor'].panels,
    plugins: ['gjs-blocks-basic', 'gjs-blocks-avance', 'gjs-plugin-forms', 'grapesjs-tabs', 'gjs-navbar', 'gjs-modal', 'grapesjs-lory-slider', 'gjs-blocks-flexbox', 'gjs-style-gradient', 'grapesjs-plugin-header', 'html-block'],//'grapesjs-blocks-bootstrap4' , 'gjs-plugin-ckeditor'
    pluginsOpts: {
        'gjs-modal': {},
        'gjs-blocks-basic': {
            'flexGrid' : true
        },
        'gjs-blocks-avance': {},
        'gjs-style-gradient': {
            colorPicker: 'default',
            grapickOpts: {
                min: 1,
                max: 99,
            }
        },
        'grapesjs-lory-slider': {
            sliderBlock: {
                category: 'Extra'
            }
        },
        'grapesjs-tabs': {
            tabsBlock: {
                category: 'Extra'
            }
        },
        'gjs-plugin-ckeditor': {
            position: 'center',
            options: {
                language: 'en',
                skin: 'moono-dark',
                toolbarGroups : [
                    { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
                    { name: 'editing', groups: [ 'find', 'selection', 'editing' ] },
                    { name: 'forms', groups: [ 'forms' ] },

                    { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
                    { name: 'links', groups: [ 'links' ] },
                    { name: 'insert', groups: [ 'insert' ] },

                    { name: 'styles', groups: [ 'styles' ] },
                    { name: 'colors', groups: [ 'colors' ] },
                    { name: 'tools', groups: [ 'tools' ] },
                    { name: 'others', groups: [ 'others' ] },
                    { name: 'about', groups: [ 'about' ] }
                ],
                removeButtons : 'NewPage,Preview,Print,Save,Source,Templates,Undo,Redo,Find,Replace,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,Base64Image,HiddenField,CreateDiv,Language,BidiRtl,BidiLtr,Anchor,Image,Flash,PageBreak,Iframe,About,ShowBlocks,toc'
            },
        }

    },
    canvas: {
        styles: [
            '../css/canvas.css'
        ],
        scripts: [
            //'https://code.jquery.com/jquery-3.2.1.slim.min.js',
            //'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js',
            //'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js'
        ],
    },
    storageManager: {
        type: 'remote',
        stepsBeforeSave: 1,
        autoload: true,
        autorender: true,
        autosave: false,
        urlStore: '/save.php',
        urlLoad: '/load.php',
        contentTypeJson: true,
        storeComponents: true,
        storeStyles: true,
        storeHtml: true,
        storeCss: true,
        storeAssets: false,

    },
    styleManager : {
        sectors: [{
            name: 'General',
            buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom'],
            properties:[{
                name: 'Alignment',
                property: 'float',
                type: 'radio',
                defaults: 'none',
                list: [
                    { value: 'none', className: 'fa fa-times'},
                    { value: 'left', className: 'fa fa-align-left'},
                    { value: 'right', className: 'fa fa-align-right'}
                ],
            },
                { property: 'position', type: 'select'}
            ],
        },{
            name: 'Dimension',
            open: false,
            buildProps: ['width', 'flex-width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
            properties: [{
                id: 'flex-width',
                type: 'integer',
                name: 'Width',
                units: ['px', '%'],
                property: 'flex-basis',
                toRequire: 1,
            },{
                property: 'margin',
                properties:[
                    { name: 'Top', property: 'margin-top'},
                    { name: 'Right', property: 'margin-right'},
                    { name: 'Bottom', property: 'margin-bottom'},
                    { name: 'Left', property: 'margin-left'}
                ],
            },{
                property  : 'padding',
                properties:[
                    { name: 'Top', property: 'padding-top'},
                    { name: 'Right', property: 'padding-right'},
                    { name: 'Bottom', property: 'padding-bottom'},
                    { name: 'Left', property: 'padding-left'}
                ],
            }],
        },{
            name: 'Typography',
            open: false,
            buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-decoration', 'text-shadow'],
            properties:[
                { name: 'Font', property: 'font-family'},
                { name: 'Weight', property: 'font-weight'},
                { name:  'Font color', property: 'color'},
                {
                    property: 'text-align',
                    type: 'radio',
                    defaults: 'left',
                    list: [
                        { value : 'left',  name : 'Left',    className: 'fa fa-align-left'},
                        { value : 'center',  name : 'Center',  className: 'fa fa-align-center' },
                        { value : 'right',   name : 'Right',   className: 'fa fa-align-right'},
                        { value : 'justify', name : 'Justify',   className: 'fa fa-align-justify'}
                    ],
                },{
                    property: 'text-decoration',
                    type: 'radio',
                    defaults: 'none',
                    list: [
                        { value: 'none', name: 'None', className: 'fa fa-times'},
                        { value: 'underline', name: 'underline', className: 'fa fa-underline' },
                        { value: 'line-through', name: 'Line-through', className: 'fa fa-strikethrough'}
                    ],
                },{
                    property: 'text-shadow',
                    properties: [
                        { name: 'X position', property: 'text-shadow-h'},
                        { name: 'Y position', property: 'text-shadow-v'},
                        { name: 'Blur', property: 'text-shadow-blur'},
                        { name: 'Color', property: 'text-shadow-color'}
                    ],
                }],
        },{
            name: 'Decorations',
            open: false,
            buildProps: ['opacity', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
            properties: [{
                type: 'slider',
                property: 'opacity',
                defaults: 1,
                step: 0.01,
                max: 1,
                min:0,
            },{
                property: 'border-radius',
                properties  : [
                    { name: 'Top', property: 'border-top-left-radius'},
                    { name: 'Right', property: 'border-top-right-radius'},
                    { name: 'Bottom', property: 'border-bottom-left-radius'},
                    { name: 'Left', property: 'border-bottom-right-radius'}
                ],
            },{
                property: 'box-shadow',
                properties: [
                    { name: 'X position', property: 'box-shadow-h'},
                    { name: 'Y position', property: 'box-shadow-v'},
                    { name: 'Blur', property: 'box-shadow-blur'},
                    { name: 'Spread', property: 'box-shadow-spread'},
                    { name: 'Color', property: 'box-shadow-color'},
                    { name: 'Shadow type', property: 'box-shadow-type'}
                ],
            },{
                property: 'background',
                properties: [
                    { name: 'Image', property: 'background-image'},
                    { name: 'Repeat', property:   'background-repeat'},
                    { name: 'Position', property: 'background-position'},
                    { name: 'Attachment', property: 'background-attachment'},
                    { name: 'Size', property: 'background-size'}
                ],
            },],
        },{
            name: 'Extra',
            open: false,
            buildProps: ['transition', 'perspective', 'transform'],
            properties: [{
                property: 'transition',
                properties:[
                    { name: 'Property', property: 'transition-property'},
                    { name: 'Duration', property: 'transition-duration'},
                    { name: 'Easing', property: 'transition-timing-function'}
                ],
            },{
                property: 'transform',
                properties:[
                    { name: 'Rotate X', property: 'transform-rotate-x'},
                    { name: 'Rotate Y', property: 'transform-rotate-y'},
                    { name: 'Rotate Z', property: 'transform-rotate-z'},
                    { name: 'Scale X', property: 'transform-scale-x'},
                    { name: 'Scale Y', property: 'transform-scale-y'},
                    { name: 'Scale Z', property: 'transform-scale-z'}
                ],
            }]
        },{
            name: 'Flex',
            open: false,
            properties: [{
                name: 'Flex Container',
                property: 'display',
                type: 'select',
                defaults: 'block',
                list: [
                    { value: 'block', name: 'Disable'},
                    { value: 'flex', name: 'Enable'}
                ],
            },{
                name: 'Flex Parent',
                property: 'label-parent-flex',
                type: 'integer',
            },{
                name      : 'Direction',
                property  : 'flex-direction',
                type    : 'radio',
                defaults  : 'row',
                list    : [{
                    value   : 'row',
                    name    : 'Row',
                    className : 'icons-flex icon-dir-row',
                    title   : 'Row',
                },{
                    value   : 'row-reverse',
                    name    : 'Row reverse',
                    className : 'icons-flex icon-dir-row-rev',
                    title   : 'Row reverse',
                },{
                    value   : 'column',
                    name    : 'Column',
                    title   : 'Column',
                    className : 'icons-flex icon-dir-col',
                },{
                    value   : 'column-reverse',
                    name    : 'Column reverse',
                    title   : 'Column reverse',
                    className : 'icons-flex icon-dir-col-rev',
                }],
            },{
                name      : 'Justify',
                property  : 'justify-content',
                type    : 'radio',
                defaults  : 'flex-start',
                list    : [{
                    value   : 'flex-start',
                    className : 'icons-flex icon-just-start',
                    title   : 'Start',
                },{
                    value   : 'flex-end',
                    title    : 'End',
                    className : 'icons-flex icon-just-end',
                },{
                    value   : 'space-between',
                    title    : 'Space between',
                    className : 'icons-flex icon-just-sp-bet',
                },{
                    value   : 'space-around',
                    title    : 'Space around',
                    className : 'icons-flex icon-just-sp-ar',
                },{
                    value   : 'center',
                    title    : 'Center',
                    className : 'icons-flex icon-just-sp-cent',
                }],
            },{
                name      : 'Align',
                property  : 'align-items',
                type    : 'radio',
                defaults  : 'center',
                list    : [{
                    value   : 'flex-start',
                    title    : 'Start',
                    className : 'icons-flex icon-al-start',
                },{
                    value   : 'flex-end',
                    title    : 'End',
                    className : 'icons-flex icon-al-end',
                },{
                    value   : 'stretch',
                    title    : 'Stretch',
                    className : 'icons-flex icon-al-str',
                },{
                    value   : 'center',
                    title    : 'Center',
                    className : 'icons-flex icon-al-center',
                }],
            },{
                name: 'Flex Children',
                property: 'label-parent-flex',
                type: 'integer',
            },{
                name:     'Order',
                property:   'order',
                type:     'integer',
                defaults :  0,
                min: 0
            },{
                name    : 'Flex',
                property  : 'flex',
                type    : 'composite',
                properties  : [{
                    name:     'Grow',
                    property:   'flex-grow',
                    type:     'integer',
                    defaults :  0,
                    min: 0
                },{
                    name:     'Shrink',
                    property:   'flex-shrink',
                    type:     'integer',
                    defaults :  0,
                    min: 0
                },{
                    name:     'Basis',
                    property:   'flex-basis',
                    type:     'integer',
                    units:    ['px','%',''],
                    unit: '',
                    defaults :  'auto',
                }],
            },{
                name      : 'Align',
                property  : 'align-self',
                type      : 'radio',
                defaults  : 'auto',
                list    : [{
                    value   : 'auto',
                    name    : 'Auto',
                },{
                    value   : 'flex-start',
                    title    : 'Start',
                    className : 'icons-flex icon-al-start',
                },{
                    value   : 'flex-end',
                    title    : 'End',
                    className : 'icons-flex icon-al-end',
                },{
                    value   : 'stretch',
                    title    : 'Stretch',
                    className : 'icons-flex icon-al-str',
                },{
                    value   : 'center',
                    title    : 'Center',
                    className : 'icons-flex icon-al-center',
                }],
            }],
        }
        ],
    },

});



editor.on('change:changesCount', (model) => {
    //console.log('changed');
});

// This action is triggered when we click on an element then we
// will active the style menu
// List of events per component:
/** ## Components
* * `component:add` - Triggered when a new component is added to the editor, the model is passed as an argument to the callback
* * `component:remove` - Triggered when a component is removed, the model is passed as an argument to the callback
* * `component:clone` - Triggered when a new component is added by a clone command, the model is passed as an argument to the callback
* * `component:update` - Triggered when a component is updated (moved, styled, etc.), the model is passed as an argument to the callback
* * `component:update:{propertyName}` - Listen any property change, the model is passed as an argument to the callback
* * `component:styleUpdate` - Triggered when the style of the component is updated, the model is passed as an argument to the callback
* * `component:styleUpdate:{propertyName}` - Listen for a specific style property change, the model is passed as an argument to the callback
* * `component:selected` - New component selected, the selected model is passed as an argument to the callback
* * `component:deselected` - Component deselected, the deselected model is passed as an argument to the callback
* * `component:toggled` - Component selection changed, toggled model is passed as an argument to the callback
**/
editor.on('component:toggled', model => {

    var openLayer = panelManager.getButton("views", "open-layers");
    if (!openLayer.get('active')){
        var openBlocksBtn = editor.Panels.getButton('views', 'open-blocks');
        openBlocksBtn && openBlocksBtn.set('active', 0);

        var openTMBtn = editor.Panels.getButton('views', 'open-tm');
        openTMBtn && openTMBtn.set('active', 1);
    }



});

editor.on('component:deselected', model => {

});

// Manage Asset Manager
var assetManager = editor.AssetManager;
$.ajax({
    url: 'load_images.php',
    type: 'POST',
    data: "",
    contentType:false,
    crossDomain: true,
    dataType: 'json',
    mimeType: "multipart/form-data",
    processData:false,
    success: function(data){

        var imagesJSON = [];

        $.each( data, function( key, value ) {
            imagesJSON[key] = value;
        });
        var images_loaded = imagesJSON;
        //editor.AssetManager.add(images_loaded); //adding images to asset manager of GrapesJS

        assetManager.load({
            //storageType  	: '',
            storeOnChange  : true,
            storeAfterUpload  : true,
            upload: 'upload_image.php',        //for temporary storage
            assets    	: images_loaded,
            dropzone: 1,
            dropzoneContent: '<div class="dropzone-inner">Drop here your assets</div>',
            uploadFile: function(e) {

                var files = e.dataTransfer ? e.dataTransfer.files : e.target.files;
                var formData = new FormData();

                for(var i in files){
                    formData.append('file-'+i, files[i]) //containing all the selected images from local
                }

                $.ajax({
                    url: 'upload_image.php',
                    type: 'POST',
                    data: formData,
                    contentType:false,
                    crossDomain: true,
                    dataType: 'json',
                    mimeType: "multipart/form-data",
                    processData:false,
                    success: function(result){
                        var myJSON = [];
                        $.each( result['data'], function( key, value ) {
                            myJSON[key] = value;
                        });
                        var images = myJSON;
                        editor.AssetManager.add(images); //adding images to asset manager of GrapesJS

                    }
                });
            }
        });

    }
});

editor.on('asset:upload:response', jsonRes => console.log('You should see a json: ', jsonRes));

/*****************************************************
 * TO OVERWRITE Cell tables and allow to use the Rich Editor by default.
 * @type {*|Object|string}
 */


var cellType = editor.DomComponents.getType("cell");
var defaultCellType = editor.DomComponents.getType('text');
var defaultCellView = defaultCellType.view;

editor.DomComponents.addType('cell', {
    model: defaultCellType.model.extend({

    }, {
        isComponent(el) {
            var result = '';
            var tag = el.tagName;

            if  (tag == 'TD' || tag == 'TH'){
                result = {
                    type: 'cell',
                    tagName: tag.toLowerCase()
                };

                return result;
            }

        },
    }),
    view: defaultCellView.extend({

        tagName: 'td',
        events: {
            'dblclick': 'openModal',
        },
        openModal: function openModal(e) {
            e.stopImmediatePropagation();
            var em = this.opts.config.em;
            var editor = em ? em.get('Editor') : '';

            if (editor) {

                if (editor.getSelected() && editor.getSelected().get('tagName') == 'img'){
                    editor.runCommand('open-assets', {
                        target: this.model,
                        onSelect: function onSelect() {
                            editor.Modal.close();
                            editor.AssetManager.setTarget(null);
                        }
                    });
                } else{
                    if (editor.getSelected() && editor.getSelected().get('tagName') != 'img'){
                        editor.getSelected().view.enableEditing();
                        //editor.runCommand('open-texteditor', {component: editor.getSelected()});
                    }


                    //setTimeout(() => {editor.RichTextEditor.enabled();editor.RichTextEditor.editable = 1}, 0)
                }


            }
            if (editor.getSelected() && editor.getSelected().get('tagName') != 'img') {
                this.el.click();
            }
        },
        disableClick: function disableClick() {
            this.preventDefault();
        },
        disableEditing() {
            const model = this.model;
            const rte = this.rte;
            if (rte && model.get('editable')) {
                rte.disable(this, this.activeRte);
                model.set('content', this.getChildrenContainer().innerHTML)
                    .trigger('change:content', model);
            }
            this.rteEnabled = 0;
            this.toggleEvents();
        },
        disableRTE: function disableRTE(e) {

            var em = this.opts.config.em;
            var editor = em ? em.get('Editor') : '';
            if (editor) {
                if (editor.getSelected() && editor.getSelected().get('tagName') != 'img'){
                    editor.runCommand('close-texteditor', {component: editor.getSelected()});
                }
            }






        }
    }),
});

editor.Commands.add('open-texteditor', {
    run:  function(editor, sender,data){

        data.component = data.component || editor.getSelected();
        this.rte = editor && editor.RichTextEditor;
        this.rte.enable(data.component.view);




    },
    stop:  function(editor, sender){


    },
});

editor.Commands.add('close-texteditor', {
    run:  function(editor, sender, data){
        data.component = data.component || editor.getSelected();
        this.rte = editor && editor.RichTextEditor;
        //data.component.view.disableEditing();

    },
    stop:  function(editor, sender){


    },
});





/***************************************************/


/*
*
* This action allows us to include a new button languages on the component blue menu
* we can include a new data-gjs-languages attribute on the HTML element for instance
* <div class="test" data-gjs-languages="true"></div>
*
* On this case it will be enable automatically or we can include the class fw-languages on
* the element so we need to check with the code below to enable it by hand.
*
* */
var hasClass = function(model, className){
    return model.get('classes').where({name: className}).length;
}

var updateProperty = function (model) {

    model.set({
        languages: false,
    });

    /*if (hasClass(model,"editable")) {
        model.set('editable', true);
    }

    if (hasClass(model,"selectable")) {
        model.set('selectable', true);
    }*/

    if (hasClass(model,"fw-languages")) {
        model.set('languages', true);
        // We update the toolbar in the model for fw-languages in the html class element
        model.set("toolbar", "").initToolbar();
       // console.log("Languages is true");


    }

    model.get('components').each(child => updateProperty(child));



};
// This event is triggered when the components are loaded on the canvas
editor.on('component:add', function (model) {

    // Method to check properties on the html tags
    updateProperty(model);
    // We update the toolbar in the model for data-gjs-languages
    model.set("toolbar", "").initToolbar();
    //console.log($(model).hasClass("gjs-languages"));


});

var modal = editor.Modal;
var cmdm = editor.Commands;
var mdlClass = 'gjs-mdl-dialog-sm';
var languagesSettingContainer = document.getElementById('languages-settings');
editor.Commands.add('tlb-languages', function() {

    var mdlDialog = document.querySelector('.gjs-mdl-dialog');
    mdlDialog.className += ' ' + mdlClass;
    languagesSettingContainer.style.display = 'block';
    modal.setTitle('Languages Settings');
    modal.setContent(languagesSettingContainer);
    modal.open();

    modal.getModel().once('change:open', function() {

        mdlDialog.className = mdlDialog.className.replace(mdlClass, '');
    })
});

/*********************************************************/


// To show a popup confirmation before deleting the object
editor.Commands.add('tlb-delete', ed => {
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will only be able to recover it by clicking on undo button",
        icon: "error",
        buttons: true,
        dangerMode: true,
        className: 'gjs-mdl-dialog',
    })
        .then((willDelete) => {
            if (willDelete) {
                const selected = ed.getSelected();
                selected && selected.destroy();
            }
        });

});




window.editor = editor;


/**
 * RICH TEXT EDITOR TO INCLUDE NEW FUNCTIONALITY.
 */
editor.RichTextEditor.add('custom-vars', {
    icon: `<select class="gjs-field">
                        <option value="">- Select -</option>
                        <option value="@data.firstname@">@data.firstname@</option>
                        <option value="@data.lastname@">@data.lastname@</option>
                        <option value="@data.age@">@data.age@</option>
                      </select>`,
    // Bind the 'result' on 'change' listener
    event: 'change',
    result: (rte, action) => rte.insertHTML(action.btn.firstChild.value),
    // Reset the select on change
    update: (rte, action) => { action.btn.firstChild.value = "";}
});

/**
 * To add in Option Panel 3 new options like undo, redo and clean all.
 */
var pnm = editor.Panels;

// New panel with publish button
pnm.addButton('options', [
        {
            id: 'publish-btn',
            label: '<label class="lb-publish"><i class="fa fa-rocket icon-large margin-right-6px"></i>Publish</label>',
            className: 'publish-container',
            active: true,
            command: {
                run: function(editor, sender) {

                }
            },
            attributes: {
                'title': 'Publish',
                'data-tooltip-pos': 'bottom',

            },
        }
]);

pnm.addButton('options', [{
    id: 'undo',
    className: 'fa fa-undo icon-undo',
    attributes: {
        'title': 'Undo',
        'data-tooltip-pos': 'bottom',
    },
    command: function(e) { return e.runCommand('core:undo') },
},{
    id: 'redo',
    attributes: {
        'title': 'Redo',
        'data-tooltip-pos': 'bottom',
    },
    className: 'fa fa-repeat icon-redo',
    command: function(e) { return e.runCommand('core:redo') },
},{
    id: 'clear-all',
    className: 'fa fa-trash icon-blank',
    attributes: {title: 'Clear canvas', 'data-tooltip-pos': 'bottom'},
    command: {
        run: function(editor, sender) {
            sender && sender.set('active', false);
            swal({
                title: "Are you sure to clean the canvas?",
                text: "Once deleted, you will only be able to recover it by clicking on undo button",
                icon: "error",
                buttons: true,
                dangerMode: true,
                className: 'gjs-mdl-dialog',
            })
                .then((willDelete) => {
                    if (willDelete) {
                        editor.DomComponents.clear();
                        setTimeout(function(){
                            localStorage.clear()
                        },0)
                    }
                });

        }
    }
}]);

pnm.addPanel({
    id          : 'left-menu', //left-editor
    visible     : false,
    buttons     : [
        {
            id: 'left-menu-btn',
            className: 'fa fa-bars icon-large',
            active: false,
            command: {
                run: function(editor, sender) {
                    openNav('#fw-menu');
                }
            },
            attributes: {
                'title': 'Menu',
                'data-tooltip-pos': 'bottom',
            },
        },
    ],
});

var domc = editor.DomComponents;
var defaultType = domc.getType('default');
var defaultView = defaultType.view;
var defaultModel = defaultType.model;


// Adding new button called 'Button' to the block editor
editor.BlockManager.add('button-basic', {
    id: "style-button",
    label: 'Style Button',
    category: 'Basic',
    content: {
        components: `<button type="button" style="background-color: #333333;
        border-color: #333333;
        color: #ffffff;
        font-weight: 500;
        letter-spacing: 1px;
        margin: .4rem .8rem !important;
        transition: all 0.3s ease-in-out;
        padding: 1rem 3rem;
        border-radius: 3px;" value="HTML Button">HTML Button</button>`,

    },

    attributes: {
        class:'fa fa-circle-thin'

    }
});



// By Default open block editor
editor.Panels.getButton('views', 'open-blocks').set('active', true);



editor.StyleManager.addProperty('Decorations', {
    name: 'Gradient',
    property: 'background-image',
    type: 'gradient',
    defaults: 'none'
});





// Simple warn notifier
var origWarn = console.warn;
toastr.options = {
    closeButton: true,
    preventDuplicates: true,
    showDuration: 250,
    hideDuration: 150
};
console.warn = function (msg) {
    toastr.warning(msg);
    origWarn(msg);
};

// Adding new button divider to the block editor
editor.BlockManager.add('divider', {
    label: 'Divider',
    category: 'Basic',
    content: `<table style="width: 100%; margin-top: 10px; margin-bottom: 10px;">
        <tr>
          <td class="divider"></td>
        </tr>
      </table>
      <style>
      .divider {
        background-color: rgba(0, 0, 0, 0.1);
        height: 1px;
      }
      </style>`,
    attributes: {class:'gjs-fonts gjs-f-divider'}
});

/**
 * Adding Page Settings method with a command
 *
 */
var modal = editor.Modal;
var cmdm = editor.Commands;
var mdlClass = 'gjs-mdl-dialog-sm';
var pageSettingContainer = document.getElementById('page-settings');
cmdm.add('open-pagesettings', function() {
    var mdlDialog = document.querySelector('.gjs-mdl-dialog');
    mdlDialog.className += ' ' + mdlClass;
    pageSettingContainer.style.display = 'block';
    modal.setTitle('Page Settings');
    modal.setContent(pageSettingContainer);
    modal.open();

    modal.getModel().once('change:open', function() {

        mdlDialog.className = mdlDialog.className.replace(mdlClass, '');
    })
});



/**
 * Adding a new button to save content on DB
 */
pnm.addButton('options', [
            {
                id: 'save-database',
                className: 'fa fa-floppy-o',
                command: 'save-database',
                attributes: {title: 'Save to database', 'data-tooltip-pos': 'bottom'}
            }
    ]
);

editor.Commands.add('save-database', {
    run: function (editor, sender) {
        var InnerHtml = this.frameEl.contentDocument.activeElement.innerHTML;

        sender && sender.set('active'); // turn off the button


        editor.store();



        //console.log(editor.getHtmlInline());

        //console.log("Count" + editor.getDirtyCount());

        //console.log(InnerHtml);
        /*$.post("/components/save/component", {
            html: InnerHtml

        }, function (result) { //do some code

        });*/
    }
});

editor.on('storage:load', function(e) {
    //console.log('Loaded Content', e);
});

editor.on('storage:store', function(e) {
    //console.log('Stored Content', e);
});

editor.on('storage:error', function(e) {
    //console.log('Error Content', e);
});
/*****************************************/






/**
 * Turn off default devices select and create new one
 */
var deviceManager = editor.DeviceManager;
deviceManager.add('Mobile Landscape', '568px');

editor.getConfig().showDevices = 0;
let devicePanel = pnm.addPanel({
    id: 'devices-c',
    visible: true,
    buttons     : [
        {
            id: 'deviceDesktop',
            command: 'set-device-desktop',
            className: 'material-icons js-desktop-icon',
            attributes: {'title':'Desktop', 'data-tooltip-pos': 'bottom'},
            active: 1,
        }, {
            id: 'deviceTablet',
            command: 'set-device-tablet',
            className: 'material-icons js-tablet-icon',
            attributes: {'title':'Tablet', 'data-tooltip-pos': 'bottom'},
        },
        {
            id: 'deviceMobileLandscape',
            command: 'set-device-mobile-landscape',
            className: 'material-icons js-mobile-landscape-icon fa-rotate-90 top-4px',
            attributes: {'title':'Mobile Landscape', 'data-tooltip-pos': 'bottom'},
        },
        {
            id: 'deviceMobile',
            command: 'set-device-mobile',
            className: 'material-icons js-mobile-icon',
            attributes: {'title':'Mobile', 'data-tooltip-pos': 'bottom'},
        }

    ],
});

// This event is fired when we click on the Preview mode
let prv;
editor.on('run:preview', () => prv = 1);
editor.on('stop:preview', () => {
        prv = 0
        editor.stopCommand('sw-visibility');
        const updateAll = model => {
            model.set({editable: true,selectable:true,hoverable:true});
            model.get('components').each(model => updateAll(model));
        }

        updateAll(editor.DomComponents.getWrapper());




    }
);
// To avoid open the asset manager on preview mode
editor.on('run:open-assets', () => prv && editor.Modal.close());

// Make body tag unselectable
editor.DomComponents.getWrapper().set({badgable: false, selectable: false});

/**
 * ADDING COMMANDS TO SET DEVICE SCREEN VIEW
 */

editor.Commands.add('set-device-desktop', {
    run: function(editor, sender)
    {

        editor.setDevice('Desktop');
        if (editor.getPreviewMode()) {

            // We need to update all elements inside the canvas to disable properties
            const updateAll = model => {
                model.set({editable: false,selectable:false,hoverable:false});
                model.get('components').each(model => updateAll(model));
            }

            updateAll(editor.DomComponents.getWrapper());


            editor.stopCommand('sw-visibility');
            editor.getModel().stopDefault();


        }
    },
    stop: function stop(editor, sender) {
        const updateAll = model => {
            model.set({editable: true,selectable:true,hoverable:true});
            model.get('components').each(model => updateAll(model));
        }

        updateAll(editor.DomComponents.getWrapper());
    }
});
editor.Commands.add('set-device-tablet', {
    run: function(editor, sender)
    {

        editor.setDevice('Tablet');

        if (editor.getPreviewMode()) {

            // We need to update all elements inside the canvas to disable properties
            const updateAll = model => {
                model.set({editable: false,selectable:false,hoverable:false});
                model.get('components').each(model => updateAll(model));
            }

            updateAll(editor.DomComponents.getWrapper());


            editor.stopCommand('sw-visibility');
            editor.getModel().stopDefault();


        }
    },
    stop: function stop(editor, sender) {
        const updateAll = model => {
            model.set({editable: true,selectable:true,hoverable:true});
            model.get('components').each(model => updateAll(model));
        }

        updateAll(editor.DomComponents.getWrapper());
    }
});
editor.Commands.add('set-device-mobile', {
    run: function(editor, sender)
    {

        editor.setDevice('Mobile portrait');
        if (editor.getPreviewMode()) {

            // We need to update all elements inside the canvas to disable properties
            const updateAll = model => {
                model.set({editable: false,selectable:false,hoverable:false});
                model.get('components').each(model => updateAll(model));
            }

            updateAll(editor.DomComponents.getWrapper());


            editor.stopCommand('sw-visibility');
            editor.getModel().stopDefault();


        }
    },
    stop: function stop(editor, sender) {
        const updateAll = model => {
            model.set({editable: true,selectable:true,hoverable:true});
            model.get('components').each(model => updateAll(model));
        }

        updateAll(editor.DomComponents.getWrapper());
    }
});

editor.Commands.add('set-device-mobile-landscape', {
    run: function(editor, sender)
    {

        editor.setDevice('Mobile Landscape');
        if (editor.getPreviewMode()) {

            // We need to update all elements inside the canvas to disable properties
            const updateAll = model => {
                model.set({editable: false,selectable:false,hoverable:false});
                model.get('components').each(model => updateAll(model));
            }

            updateAll(editor.DomComponents.getWrapper());


            editor.stopCommand('sw-visibility');
            editor.getModel().stopDefault();


        }
    },
    stop: function stop(editor, sender) {
        const updateAll = model => {
            model.set({editable: true,selectable:true,hoverable:true});
            model.get('components').each(model => updateAll(model));
        }

        updateAll(editor.DomComponents.getWrapper());
    }
});
/*****************************************/


// Show borders by default
pnm.getButton('options', 'sw-visibility').set('active', 1);



/*******************************
* Hide Buttons
********************************/
let optPanel = pnm.getPanel('left-menu');
var cmdBtns = optPanel.get('buttons');
let prvBtn = pnm.addButton('left-menu', 'left-menu-btn');
// Hide
//prvBtn && cmdBtns.set('attributes', { 'style': 'display:none'  });

/*******************************
 * REMOVE A BUTTON
 ********************************/
//prvBtn && cmdBtns.remove(prvBtn);


/*******************************
 * REMOVE A PANEL
 ********************************/
//let panels = pnm.getPanels(editor);
//optPanel && panels.remove(optPanel);


var panelManager = editor.Panels;

// get the buttons
var styleManagerButton = panelManager.getButton("views", "open-sm");
var layersButton = panelManager.getButton("views", "open-layers");
var blocksButton = panelManager.getButton("views", "open-blocks");
var codeEditorButton = panelManager.getButton("views", "open-code");
var settingsButton = panelManager.getButton("views", "open-tm");

// remove the buttons
panelManager.removeButton("views", "open-sm");
panelManager.removeButton("views", "open-layers");
panelManager.removeButton("views", "open-blocks");
panelManager.removeButton("views", "open-code");
panelManager.removeButton("views", "open-tm");

// add the buttons back in a custom order
blocksButton.set('className', 'fa fa-cubes');
styleManagerButton.set('className', 'fa fa-sliders');
layersButton.set('className', 'material-icons js-layers');
panelManager.addButton("views", blocksButton);
panelManager.addButton("views", settingsButton);
panelManager.addButton("views", styleManagerButton);
panelManager.addButton("views", layersButton);
panelManager.addButton("views", codeEditorButton);


/**********************************************/
/* NEW BLOCK TO ADD Custom Blocks from Flowize*/
/**********************************************/
editor.BlockManager.add('custom_blocks', {
    label: 'Add Custom blocks',
    textable: true,
    attributes: {class:'fa fa-toggle-on'},
    category: 'Extra',
    content: {
        type: 'custom_blocks',
        attributes: {
            'data-mergefield': 1,
            'data-highlightable': 1,
            readonly: false,
            value: 'Custom Blocks'

        },
        style: {
            height: '34px',
            width: '100%',
            display: 'inline-block',
            border: '1px dashed #455699',
            'text-align': 'center',
            'background-color': 'rgb(59, 121, 195)',
            'padding': '3px',
            'border-radius': '3px',
            'color': 'rgba(255, 255, 255, 0.9)',
            'align-self': 'center',
            'min-width': '80px'


        }
    }
});




// Including a void type to not allow user to click on the HTML element
// This is useful for our attribute attr-canedit="no"
// And then in your templates set the type explicitly:
// <div data-gjs-type="void-component">
// 	...
// </div>
domc.addType('void-component', {
    model: defaultModel.extend({
        defaults: { ...defaultModel.prototype.defaults,
            style: { 'pointer-events': 'none' } // you won't be able to select it
        },
        toHTML() {
            return ''; // returns none HTML
        }
    }, {
        isComponent: function(el) {

        },
    }),
    view: defaultView,
});

// This is a Custom Block
domc.addType('custom_blocks', {
    model: defaultModel.extend({
        toolbar: [
            {
                attributes: {class: 'fa fa-arrows'},
                command: 'tlb-move',
            }
        ],
        defaults: Object.assign({}, defaultModel.prototype.defaults, {
            'custom-name': "Custom Blocks",
            tagName: 'input',
            class: 'merge-field',
            badgable: true,
            highlightable: true,
            editable: true,
            droppable: false,
            draggable: true,
            removable: true,
            traits: [
                {
                    label: "Custom blocks",
                    type: 'select',
                    name: 'value',
                    options: [
                        {value: '@htmlblock.test1@', name: "@htmlblock.test1@"},
                        {value: '@htmlblock.test2@', name: "@htmlblock.test2@"},
                        {value: '@htmlblock.test3@', name: "@htmlblock.test3@"},
                        {value: '@htmlblock.test4@', name: "@htmlblock.test4@"},
                    ]
                }
            ]
        }),
    }, {
        toolbar: [
            {
                attributes: {class: 'fa fa-arrows'},
                command: 'tlb-move',
            }
        ],
        isComponent(el) {
            if(el.tagName == 'INPUT' && el.dataset.mergefield == "1") {
                return {type: 'Custom Block'};
            }
        },
    }),
    view: defaultView.extend({

        events: {
            'click': function(e) {
                //console.log("click");
            },
              /*'dragstart': function(e) {
                 e.target.id = 'mergefield-' + (new Date()).getTime();
                 console.log('dragstart', e.target.id);
                 e.dataTransfer.setData('mergefield', e.target.id);
             },*/
            'keydown': function(e) {
                if (e.key == 'Backspace') {
                    e.target.parentNode.removeChild(e.target);
                }
                // console.log("KEYDOWN:", e);
            }
        }
    }),
});
/**********************************************/






// Do stuff on load
editor.on('load', function() {


    var $ = grapesjs.$;
    changePreloaderMsg(".js-preloader-msg",0);

    // Show logoFlowize
    var logoFW = document.querySelector('.fw-logo-editor');
    document.querySelector('.fw-logo-editor-msg').innerHTML = 'Editor';
    var logoPanel = document.querySelector('.gjs-pn-left-menu');
    logoPanel.appendChild(logoFW);

    /**********************************************************/
    // Add and beautify tooltips
    /**********************************************************/
    [['sw-visibility', 'Show Borders'], ['preview', 'Preview'], ['fullscreen', 'Fullscreen'],
        ['undo', 'Undo'], ['redo', 'Redo'],
         ['canvas-clear', 'Clear canvas']]
        .forEach(function(item) {
            if (editor.Panels.getButton('options', item[0])){
                editor.Panels.getButton('options', item[0]).set('attributes', {title: item[1], 'data-tooltip-pos': 'bottom'});
            }

        });
    [['open-sm', 'Style Manager'], ['open-layers', 'Layers'], ['open-blocks', 'Blocks']]
        .forEach(function(item) {
            if (editor.Panels.getButton('options', item[0])){
                editor.Panels.getButton('views', item[0]).set('attributes', {title: item[1], 'data-tooltip-pos': 'bottom'});
            }

        });

    // Beautify tooltips
    $('*[title]').each(function () {
        var el = $(this);
        var title = el.attr('title').trim();
        if(!title || title == "Tablet" || title=="Mobile Landscape" || title=="Mobile" || title=="Desktop" || el.parent().hasClass('gjs-blocks-c'))
            return;
        el.attr('data-tooltip', el.attr('title'));

    });

    $('.gjs-mdl-btn-close').on('click', function () {
        console.log("modal close");

        editor.Modal.close();

    });
    /**********************************************************/

    var fullScrBtn = editor.Panels.getButton('options', 'fullscreen');
    fullScrBtn.set('attributes', {
        'data-tooltip-pos': 'bottom'
    });

    var swichtVwBtn = editor.Panels.getButton('options', 'sw-visibility');
    swichtVwBtn.set('attributes', {
        'data-tooltip-pos': 'bottom'
    });

    var previewBtn = editor.Panels.getButton('options', 'preview');
    previewBtn.set('attributes', {
        'data-tooltip-pos': 'bottom'
    });


    var openSmBtn = editor.Panels.getButton('views', 'open-sm');
    openSmBtn.set('attributes', {
        'data-tooltip-pos': 'bottom'
    });
    var openTmBtn = editor.Panels.getButton('views', 'open-tm');
    openTmBtn.set('attributes', {
        'data-tooltip-pos': 'bottom'
    });
    var openLayersBtn = editor.Panels.getButton('views', 'open-layers');
    openLayersBtn.set('attributes', {
        'data-tooltip-pos': 'bottom'
    });

    var openBlocksBtn = editor.Panels.getButton('views', 'open-blocks');
    openBlocksBtn.set('attributes', {
        'data-tooltip-pos': 'bottom'
    });

    var codeEditorBtn = editor.Panels.getButton('views', 'open-code');
    codeEditorBtn.set('attributes', {
        'data-tooltip-pos': 'bottom'
    });

    /**
     * To hide a button
     */
      /*var openBlocksBtn2 = editor.Panels.getButton('left-editor', 'open-editor-lf');
    openBlocksBtn2.set('attributes', {
        'style': 'display:none'
    });*/


      // Adding class to a panel [That case to hide the panel]
      //$('.gjs-pn-left-editor').addClass("hidden");

     $('.js-layers').html('&#xe53b;');
     $('.js-desktop-icon').html('&#xe320;');
     $('.js-tablet-icon').html('&#xe331;');
     $('.js-mobile-icon').html('&#xe325;');
     $('.js-mobile-landscape-icon').html('&#xe325;');

    window.setInterval(function(){
        changePreloaderMsg(".js-preloader-msg",1);
    }, 1000);


    // Load page settings when is clicked
    loadPageSettings();
    loadChangeTheme();
    getWindowDims();

    onReady(function() {

        setVisible('#gjs', true);
        setFade('.js-fw-preloader', false);

        const getAllComponents = (model, result = []) => {

            model.forEach(_ => {
                /*console.log(
                    _.attributes

                );*/
                result.push(_.attributes);

            });
            return result;
        }
        const all = getAllComponents(editor.DomComponents.getComponents());

        //console.log(all);
    });





});

// Check on resize windows if the screen is too small
window.onresize = function() {
    getWindowDims();
};



// With autorender false we need to call manually to render
editor.render();

function loadChangeTheme() {
    let theme = 0;
    $('.js-change-theme').on('click', function () {
        if (!theme){
            $('.fw-logo').attr('src', 'img/logo_flowize_mini_transp.png');
            $('.fw-logo-editor-msg').attr('style','color:black');
            $("head link[rel='stylesheet']").last().after("<link rel='stylesheet' href='css/theme-white.css' type='text/css' media='screen'>");
            theme = 1;
        }else{
            $('.fw-logo').attr('src', 'img/logo_flowize_white_mini_transp.png');
            $('.fw-logo-editor-msg').attr('style','color:white');
            $("head link[href='css/theme-white.css']").remove();
            theme = 0;
        }

    });
};


function loadPageSettings(){
    $('.js-page-settings').on('click', function () {
        $('.gjs-mdl-btn-save').removeClass('hidden');
        $('.gjs-mdl-btn-save').addClass('js-save-pagesettings');
        editor.runCommand('open-pagesettings');
    });



    $(document).on('click', '.js-save-pagesettings', function () {
        var $iframe = $(".gjs-frame").contents(),
            $iframe_body = $iframe.find("body"),
            subject = $('.js-page-name-field').val();



        if (subject != null && subject.length > 0) {
            $iframe_body.attr('data-subject', subject);
        } else {
            $iframe_body.removeAttr('data-subject');
        }

        var msg = 'The Page title has been Saved correctly';

        toastr.options = {
            closeButton: true,
            preventDuplicates: true,
            showDuration: 250,
            hideDuration: 150
        };
        toastr.success(msg);

    });

}

function setFade(selector){
    var preloader = document.querySelector(selector);
    preloader.className += ' fade';
    setTimeout(function(){
        preloader.style.display = 'none';
    }, 100);
}


function openNav(selector) {
    document.querySelector(selector).style.width = "250px";

}

function closeNav(selector) {
    document.querySelector(selector).style.width = "0";
}


function changePreloaderMsg(selector, index){

    document.querySelector(selector).innerHTML = spinner_messages[index];


}


function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

function onReady(callback) {

    var intervalId = window.setInterval(function() {

        if (document.readyState === 'complete') {
            window.clearInterval(intervalId);
            var msg_interval =  window.setInterval(function(){

                window.clearInterval(msg_interval);

                var last_msg = window.setInterval(function(){
                    changePreloaderMsg(".js-preloader-msg",2);
                    window.clearInterval(last_msg);
                    callback.call(this);
                }, 2000);
            }, 2000);



        }
    }, 1000);
}

/**
 * Function to determine Viewport Size
 */
function getWindowDims() {
    var doc = document, w = window;
    var docEl = (doc.compatMode && doc.compatMode === 'CSS1Compat')?
        doc.documentElement: doc.body;

    var width = docEl.clientWidth;
    var height = docEl.clientHeight;

    // mobile zoomed in?
    if ( w.innerWidth && width > w.innerWidth ) {
        width = w.innerWidth;
        height = w.innerHeight;
    }


    if (width < 901){
        $('.fw-viewportwarning-wrapper').removeClass("hidden");
    }else{
        $('.fw-viewportwarning-wrapper').addClass("hidden");
    }

    return {width: width, height: height};
}



