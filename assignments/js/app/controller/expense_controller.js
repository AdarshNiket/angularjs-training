app.controller('ExpenseController',['$scope', function($scope){
	// $scope.name = "Hello Adarsh";
	$scope.expenses = [{
		"id": 1,
        "payer": "Isabel Saunders",
        "payee": "Caroline Adkins",
        "amount": "$50.00",
        "date": "December 28, 2015",
        "modeOfPayment": "Electronic Transfer",
        "notes": "Money Owed",
        "type": "Expense"
    }, {
        "id": 2,
        "payer": "Isabel Saunders",
        "payee": "Wall-E Mart Inc.",
        "amount": "$280.00",
        "date": "December 31, 2015",
        "modeOfPayment": "Credit Card",
        "notes": "New Year's Gift",
        "type": "Expense"
    }, {
        "id": 3,
        "payer": "Isabel Saunders",
        "payee": "Gretchen Hunter",
        "amount": "$250.00",
        "date": "January 05, 2016",
        "modeOfPayment": "Electronic Transfer",
        "notes": "Rent Share",
        "type": "Expense"
    }, {
        "id": 4,
        "payer": "Isabel Saunders",
        "payee": "Wall-E Mart Inc.",
        "amount": "$100.00",
        "date": "January 07, 2016",
        "modeOfPayment": "Credit Card",
        "notes": "Monthly Provisions",
        "type": "Expense"
    }, {
        "id": 5,
        "payer": "BitiBank LTD.",
        "payee": "Isabel Saunders",
        "amount": "$500.00",
        "date": "January 10, 2016",
        "modeOfPayment": "Electronic Transfer",
        "notes": "Credit Card Payment",
        "type": "Expense"
    }, {
        "id": 6,
        "payer": "Isabel Saunders",
        "payee": "Drunkards Pub",
        "amount": "$100.00",
        "date": "January 15, 2016",
        "modeOfPayment": "Credit Card",
        "notes": "Night Out",
        "type": "Expense"
	}];
	$scope.incomes = [{
		"id": 1,
        "payer": "Gretchen Hunter",
        "payee": "Isabel Saunders",
        "amount": "$100.00",
        "date": "December 17, 2015",
        "modeOfPayment": "Cash",
        "notes": "Dinner Cash",
        "type": "Income"
    }, {
        "id": 2,
        "payer": "Marian Floyd",
        "payee": "Isabel Saunders",
        "amount": "$98.00",
        "date": "January 04, 2016",
        "modeOfPayment": "Cash",
        "notes": "Dinner Share",
        "type": "Income"
    }, {
        "id": 3,
        "payer": "Random Inc.",
        "payee": "Isabel Saunders",
        "amount": "$2500.00",
        "date": "January 04, 2016",
        "modeOfPayment": "Electronic Transfer",
        "notes": "Salary",
        "type": "Income"
    }, {
        "id": 4,
        "payer": "New Venture Inc.",
        "payee": "Isabel Saunders",
        "amount": "$600.00",
        "date": "January 15, 2016",
        "modeOfPayment": "Cash",
        "notes": "Side Project Payment",
        "type": "Income"
	}];
	$scope.showIncome = true;
	$scope.showExpense = false;
    $scope.addIncome = false;
    $scope.addExpense = false;
    $scope.rowObject = {};
    $scope.addIncomeRow = function(){
        $scope.addIncome = !$scope.addIncome;
        $scope.incomes.push($scope.rowObject);
        $scope.rowObject= {};
    };
    $scope.addExpenseRow = function(){
        $scope.addExpense = !$scope.addExpense;
        $scope.expenses.push($scope.rowObject);
        $scope.rowObject= {};
    };
}]);