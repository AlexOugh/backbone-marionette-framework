define([
  'backbone.marionette',
  '../singletons/session',
  './user_buttons',
  'hbs!../templates/header'
], function(
  Marionette,
  session,
  UserButtons,
  headerTmpl
) {
  return Marionette.LayoutView.extend({
    template: headerTmpl,
    model: session,
    regions: {
      user: ".user"
    },
    ui: {
    },
    modelEvents: {
      sync: 'render'
    },
    onDomRefresh: function() {
      var self = this;
      this.getRegion('user').show(new UserButtons({
        model: this.model
      }));
    }
  });
});
