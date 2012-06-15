// Generated by CoffeeScript 1.3.3
(function() {

  window.kottibrowser = function(field_name, url, type, win) {
    var kotti_url;
    kotti_url = window.location.toString();
    kotti_url = kotti_url.replace(/@@edit/, "@@kottibrowser");
    kotti_url = kotti_url.replace(/add_document/, "@@kottibrowser");
    if (kotti_url.indexOf("?") < 0) {
      kotti_url = kotti_url + "?type=" + type;
    } else {
      kotti_url = kotti_url + "&type=" + type;
    }
    tinyMCE.activeEditor.windowManager.open({
      file: kotti_url,
      title: "Kotti Browser",
      width: 800,
      height: 600,
      resizable: "yes",
      inline: "yes",
      popup_css: false,
      close_previous: "no"
    }, {
      window: win,
      input: field_name
    });
    return false;
  };

  window.kottibrowserdialog = {
    init: function() {
      return $("select[name=image_scale]").change(function() {
        var image_scale_url;
        image_scale_url = "" + image_url + "/" + ($(this).val());
        $("#kottibrowser_image_preview").attr("src", image_scale_url);
        return $("input[name=url]").val(image_scale_url);
      });
    },
    submit: function() {
      var url, win;
      url = $("#kottibrowser_form input#url").val();
      win = tinyMCEPopup.getWindowArg("window");
      win.document.getElementById(tinyMCEPopup.getWindowArg("input")).value = url;
      if (typeof win.ImageDialog !== "undefined") {
        if (win.ImageDialog.getImageData) {
          win.ImageDialog.getImageData();
        }
        if (win.ImageDialog.showPreviewImage) {
          win.ImageDialog.showPreviewImage(url);
        }
      }
      return tinyMCEPopup.close();
    }
  };

  tinyMCEPopup.onInit.add(kottibrowserdialog.init, kottibrowserdialog);

}).call(this);
