(function() {
    angular.module('InventarioApp', [])
      .controller('InventarioCtrl', inventarioCtrlFn);
  
    inventarioCtrlFn.$inject = ['$scope', '$log'];
    
    function inventarioCtrlFn ($scope, $log) {
      $log.debug('Iniciando InventarioCtrl');
      $scope.valorTest = 'UNO';
      var foto1 = 'https://img2.freepng.es/20171216/2b4/hamburger-burger-png-image-5a35e0977d5010.2702402215134803435133.jpg';
      var foto2 = 'https://img2.freepng.es/20180402/tue/kisspng-shawarma-wrap-falafel-chicken-sandwich-shawarma-5ac1def6c9e280.2882410115226549668269.jpg';
      var foto3 = 'https://img.lovepik.com/element/45001/5730.png_860.png';
      
      $scope.items = {};
      $scope.items.Hamburguesas = [];
      $scope.items.Hamburguesas.push({ref:'REF00001', desc:'hamburguesa de carne sencilla', img:foto1});
      $scope.items.Hamburguesas.push({ref:'REF00002', desc:'hamburguesa de carne doble', img:foto1});
      $scope.items.Hamburguesas.push({ref:'REF00003', desc:'hamburguesa de especial con todo, hamburguesa de especial sin huevo, hamburguesa de especial sin queso', img:foto1});
      $scope.items.Hamburguesas.push({ref:'REF00004', desc:'hamburguesa de', img:foto1});
      $scope.items.Hamburguesas.push({ref:'REF00005', desc:'hamburguesa de', img:foto1});
      $scope.items.Hamburguesas.push({ref:'REF00006', desc:'hamburguesa de', img:foto1});
          
      $scope.items.shawarmare = [];
      $scope.items.shawarmare.push({ref:'REF10001', desc:'shawarmare de pollo', img:foto2});
      $scope.items.shawarmare.push({ref:'REF10002', desc:'shawarmare de pollo y carne', img:foto2});
      $scope.items.shawarmare.push({ref:'REF10003', desc:'shawarmare de pollo y cerdo', img:foto2});
      $scope.items.shawarmare.push({ref:'REF10004', desc:'shawarmare de pollo y tocineta', img:foto2});
      $scope.items.shawarmare.push({ref:'REF10005', desc:'shawarmare de pollo con todo', img:foto2});
          
      $scope.items.bebidas = [];
      $scope.items.bebidas.push({ref:'fresa', img:foto3});
      $scope.items.bebidas.push({ref:'maracuya', desc:'Esto es un 2', img:foto3});
      $scope.items.bebidas.push({ref:'cereza', desc:'Esto es un 3', img:foto3});
      $scope.items.bebidas.push({ref:'frambueza', desc:'Esto es un 4', img:foto3});
      $scope.items.bebidas.push({ref:'limón', desc:'Esto es un 5', img:foto3});
      
      $scope.listaCategorias = Object.keys($scope.items);
      $scope.categoria = $scope.listaCategorias[0];
      $scope.actualizaCategoria = function (){
        $scope.listaItems = $scope.items[$scope.categoria];
      }
      $scope.actualizaCategoria();    
    }
  })();