function totalSum() {
  let bamount = parseFloat(document.getElementById('amount').value)
  let tamount = parseFloat(document.getElementById('tip').value)

  if(isNaN(bamount) || isNaN(tamount)){
    alert("Please enter the valid numbers")
    return
  }
  let totalAmount = (bamount + tamount)

  document.getElementById('totalAmount').textContent = totalAmount;
  
}