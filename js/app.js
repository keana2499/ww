var app = angular.module("myModule", [])
				.controller("myController", function($scope){
				$scope.carts=[];
				$scope.products = [
					{p_id: "1", p_name: "Asus Zenbook 13", p_image: "images/asus.png", p_price: 50400},
					{p_id: "2", p_name: "Acer A315-35-P1FX", p_image: "images/acer.png", p_price: 22000},
					{p_id: "3", p_name: "Lenovo", p_image: "images/lenovo.jpg", p_price: 20220},
					{p_id: "4", p_name: "Nikon Coolpix", p_image: "images/camera.png", p_price: 16990},
					{p_id: "5", p_name: "Canon", p_image: "images/canon.png", p_price: 18820},
					{p_id: "6", p_name: "Video Camera", p_image: "images/vc1.png", p_price: 19910},
					{p_id: "7", p_name: "Iphone 11", p_image: "images/iphone.png", p_price: 19910},
					{p_id: "8", p_name: "Iphone 12", p_image: "images/iphone12.png", p_price: 19910},
					{p_id: "9", p_name: "Iphone 13", p_image: "images/iphone13.png", p_price: 19910},


					

				];
				
				$scope.add_cart = function(product){
					if(product){
						$scope.carts.push({p_id: product.p_id, p_name: product.p_name, p_price: product.p_price});
					}	
				}
						
					
				$scope.total = 0;
				
				$scope.setTotals = function(cart){
					if(cart){
						$scope.total += cart.p_price;
					}
				}
				
				$scope.remove_cart = function(cart){
					if(cart){
						$scope.carts.splice($scope.carts.indexOf(cart), 1);
						$scope.total -= cart.p_price;
					}
				}
	});