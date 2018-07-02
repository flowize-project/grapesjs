import _ from 'underscore';

module.exports = {
  getPanels(editor) {
    if (!this.panels) this.panels = editor.Panels.getPanelsEl();
    return this.panels;
  },

  tglPointers(editor, v) {
    var elP = editor.Canvas.getBody().querySelectorAll(
      '.' + this.ppfx + 'no-pointer'
    );
    _.each(elP, item => {
      item.style.pointerEvents = v ? '' : 'all';
    });
  },

  run(editor, sender) {
    if (sender && sender.set) sender.set('active', false);
    // This command line hide the guide lines on each element
    editor.stopCommand('sw-visibility');
    editor.getModel().stopDefault();

    var that = this;
    var panels = this.getPanels(editor);
    var canvas = editor.Canvas.getElement();
    var editorEl = editor.getEl();
    var pfx = editor.Config.stylePrefix;

    editor.setPreviewMode(true);

    // We need to hide panel view
    var panelView = editor.Panels.getPanel('views');
    if (panelView) {
      panelView.view.$el[0].style.display = 'none';
    }

    var view_container = document.body.querySelector('.gjs-pn-views-container');
    if (view_container) {
      view_container.className += ' hidden';
    }

    // To hide some buttons
    var swVisibilityBtn = editor.Panels.getButton('options', 'sw-visibility');
    if (swVisibilityBtn) {
      swVisibilityBtn.set('attributes', {
        style: 'display:none'
      });
    }

    var publishBtn = editor.Panels.getButton('publish', 'publish-btn');
    if (publishBtn) {
      publishBtn.set('attributes', {
        style: 'display:none'
      });
    }

    var undoBtn = editor.Panels.getButton('options', 'undo');
    if (undoBtn) {
      undoBtn.set('attributes', {
        style: 'display:none'
      });
    }

    var redoBtn = editor.Panels.getButton('options', 'redo');
    if (redoBtn) {
      redoBtn.set('attributes', {
        style: 'display:none'
      });
    }

    var clearalloBtn = editor.Panels.getButton('options', 'clear-all');
    if (clearalloBtn) {
      clearalloBtn.set('attributes', {
        style: 'display:none'
      });
    }

    var saveDBBtn = editor.Panels.getButton('options', 'save-database');
    if (saveDBBtn) {
      saveDBBtn.set('attributes', {
        style: 'display:none'
      });
    }

    var no_preview = document.body.querySelector('.fa-eye');
    no_preview.className += ' hidden';

    if (!this.helper) {
      this.helper = document.createElement('span');
      this.helper.className = pfx + 'off-prv fa fa-eye-slash';
      no_preview.parentNode.insertBefore(this.helper, no_preview.nextSibling);
      this.helper.onclick = function() {
        editor.stopCommand('preview');
      };
    }
    this.helper.style.display = 'inline-block';
    this.tglPointers(editor);

    /*
      editor.Canvas.getBody().querySelectorAll('.' + pfx + 'no-pointer').forEach(function(){
        this.style.pointerEvents = 'all';
      });*/

    panels.style.display = 'block';
    var canvasS = canvas.style;
    canvasS.width = '100%';
    //canvasS.height = '100%';
    //canvasS.top = '0';
    //canvasS.left = '0';
    canvasS.padding = '0';
    canvasS.margin = '0';
    editor.trigger('change:canvasOffset');
  },
  stop: function stop(editor, sender) {
    var panels = this.getPanels(editor);
    editor.runCommand('sw-visibility');
    editor.getModel().runDefault();
    panels.style.display = 'block';
    var canvas = editor.Canvas.getElement();
    canvas.setAttribute('style', '');

    // Set preview mode off
    editor.setPreviewMode(false);
    // We need to hide panel view
    var panelView = editor.Panels.getPanel('views');
    if (panelView) {
      panelView.view.$el[0].style.display = 'block';
    }

    var view_container = document.body.querySelector('.gjs-pn-views-container');
    if (view_container) {
      view_container.classList.remove('hidden');
    }

    var publishBtn = editor.Panels.getButton('publish', 'publish-btn');
    if (publishBtn) {
      publishBtn.set('attributes', {
        style: 'display:flex'
      });
    }

    // To hide some buttons
    var swVisibilityBtn = editor.Panels.getButton('options', 'sw-visibility');
    if (swVisibilityBtn) {
      swVisibilityBtn.set('attributes', {
        style: 'display:flex'
      });
    }

    var saveDBBtn = editor.Panels.getButton('options', 'save-database');
    if (saveDBBtn) {
      saveDBBtn.set('attributes', {
        style: 'display:flex'
      });
    }

    var undoBtn = editor.Panels.getButton('options', 'undo');
    if (undoBtn) {
      undoBtn.set('attributes', {
        style: 'display:flex'
      });
    }

    var redoBtn = editor.Panels.getButton('options', 'redo');
    if (redoBtn) {
      redoBtn.set('attributes', {
        style: 'display:flex'
      });
    }

    var clearalloBtn = editor.Panels.getButton('options', 'clear-all');
    if (clearalloBtn) {
      clearalloBtn.set('attributes', {
        style: 'display:flex'
      });
    }

    // By Default open block editor
    editor.Panels.getButton('views', 'open-blocks').set('active', true);

    if (this.helper) {
      var no_preview = document.body.querySelector('.fa-eye-slash');
      var preview = document.body.querySelector('.fa-eye');
      preview.classList.remove('hidden');
      //preview.parentNode.removeChild(this.helper);
      this.helper.style.display = 'none';
    }
    editor.trigger('change:canvasOffset');
    this.tglPointers(editor, 1);
  }
};
