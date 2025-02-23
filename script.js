
const form = document.querySelector('form');
const clearAll = document.querySelector('.clearAll');

clearAll.addEventListener('click', () => {
    form.reset();
    document.querySelector('.btn').disabled = false;
    document.querySelector('.filledResult').style.display = 'none';
    document.querySelector('.emptyResult').style.display = 'flex';
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const mAmount = document.querySelector('#mAmount').value;
    const mTerm = document.querySelector('#mterm').value;
    const mRate = document.querySelector('#mrate').value;
    const mType = document.querySelector("input[name='mType']:checked");
    let isValid = true;
    if (!mType) {
        isValid = false;
        document.querySelector('.mtypeerror').innerHTML = 'This field is required';
        document.querySelector('.mtypeerror').style.color = 'red';
    }
    if (!mAmount) {
        isValid = false;
        document.querySelector('.mamterror').innerHTML = 'This field is required';
        document.querySelector('.mamterror').style.color = 'red';
        document.querySelector('.mAmntlabel').style.backgroundColor = 'red';
        document.querySelector('.mAmntlabel').style.color = 'white';
    }
    if (!mTerm) {
        isValid = false;
        document.querySelector('.mtermerror').innerHTML = 'This field is required';
        document.querySelector('.mtermerror').style.color = 'red';
        document.querySelector('.mtermlabel').style.backgroundColor = 'red';
        document.querySelector('.mtermlabel').style.color = 'white';
    }
    if (!mRate) {
        isValid = false;
        document.querySelector('.mrateerror').innerHTML = 'This field is required';
        document.querySelector('.mrateerror').style.color = 'red';
        document.querySelector('.mratelabel').style.backgroundColor = 'red';
        document.querySelector('.mratelabel').style.color = 'white';
    }
    if (isValid) {
        document.querySelector('.emptyResult').style.display = 'none';
        document.querySelector('.filledResult').style.display = 'flex';
        document.querySelector('.btn').disabled = false;
        document.querySelector('.mamterror').innerHTML = '';
        document.querySelector('.mtermerror').innerHTML = '';
        document.querySelector('.mrateerror').innerHTML = '';
        document.querySelector('.mtypeerror').innerHTML = '';
        document.querySelector('.mAmntlabel').style.backgroundColor = '#DCEEF8';
        document.querySelector('.mAmntlabel').style.color = 'var(--headingColor)';
        document.querySelector('.mtermlabel').style.backgroundColor = '#DCEEF8';
        document.querySelector('.mtermlabel').style.color = 'var(--headingColor)';
        document.querySelector('.mratelabel').style.backgroundColor = '#DCEEF8';
        document.querySelector('.mratelabel').style.color = 'var(--headingColor)';
        document.querySelector('.mtypeerror').style.color = 'var(--headingColor)';


        const monthlyRepayment = document.querySelector('#monthlyRepayment');
        const totalRepayment = document.querySelector('#totalRepayment');
        let monthlyRepaymentValue = 0;
        let totalRepaymentValue = 0;
        if (mType.value == 'repayment') {
            const P = parseFloat(mAmount);
            const r = parseFloat(mRate) / 12 / 100;
            const n = parseInt(mTerm) * 12;

            if (r > 0) {
                const formula_repayment = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
                monthlyRepaymentValue = formula_repayment.toFixed(2);
                totalRepaymentValue = (formula_repayment * mTerm * 12).toFixed(2);
                
            } else {
                const formula_repayment = P / n;
                monthlyRepaymentValue = formula_repayment.toFixed(2);
                totalRepaymentValue = (formula_repayment * mTerm * 12).toFixed(2);
               
            }

            monthlyRepayment.innerHTML = monthlyRepaymentValue;
            totalRepayment.innerHTML = totalRepaymentValue;

        } else {
            const P = parseFloat(mAmount);
            const rAnnual = parseFloat(mRate);
            const nMonths = parseInt(mTerm)*12

            if (rAnnual > 0) {
                const formula_interest = P * (rAnnual / 100 / 12);
                monthlyRepaymentValue = formula_interest.toFixed(2);
                totalRepaymentValue = (formula_interest * nMonths).toFixed(2);
                
            } else {
                
                monthlyRepaymentValue = (P/nMonths).toFixed(2);
                totalRepaymentValue = (P).toFixed(2);
            }
            monthlyRepayment.innerHTML = monthlyRepaymentValue;
            totalRepayment.innerHTML = totalRepaymentValue;
        }
    }

})
