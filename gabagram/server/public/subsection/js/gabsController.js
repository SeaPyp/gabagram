angular.module('gabagramApp')
  .controller('GabsController', GabsController);

GabsController.$inject = ['GabsFactory'];

function GabsController(GabsFactory){
  var self = this;
  self.api = GabsFactory;
  self.list = [];
  self.add = add;
  self.remove = remove;

  self.api.getAllGabs()
    .success(function(data){
      console.log(data);
      self.list = data;
    });

  function add(){
      self.api.new(self.new)
      .success(function(data){
        self.api.getAllGabs()
          .success(function(data){
            self.list = (data);
            self.new = {};
          });
      });
    // self.list.push(self.new);
  }

  function remove(item){
    var id = item._id;
    self.api.destroy(id)
      .success(function(data){
        self.api.getAllGabs()
          .success(function(gabs){
            self.list = gabs;
          });
      });
  }
}
