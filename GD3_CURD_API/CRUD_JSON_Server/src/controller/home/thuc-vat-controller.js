window.ThucVatController = function ($scope, $http) {
  $scope.thucVats = [];

  // HTTP Method : GET, POST, PUT, DELETE
  // CRUD : CREATE, READ, UPDATE, DELETE
  // GET <=> SELECT : Lay ra = READ
  // DELETE <=> DELETE : DELETE
  // PUT <=> UPDATE : UPDATE
  // POST <=>INSERT INTO : CREATE

  // Get
  $http.get(thucVatAPI).then(
    // request: nhung cai muon dua di client => server
    // response: nhung cai nhan duoc tu server => client
    function (response) {
      // console.log(response);
      // response.status === 200
      // if (response.statusText === "OK") {
      // Khi thanh cong
      $scope.thucVats = response.data;
      // }
    }
  );
  // Delete
  $scope.deleteThucVat = function (event, index) {
    event.preventDefault();
    const tv = $scope.thucVats[index];
    $http.delete(`${thucVatAPI}/${tv.id}`).then(function () {
      $scope.thucVats.splice(index, 1);
      alert("Xóa thành công");
    });
  };
};
