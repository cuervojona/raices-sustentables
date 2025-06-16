
document.addEventListener('DOMContentLoaded', () => {

    const entradasContainer = document.getElementById('tickets-section');
    const personalDataSection = document.getElementById('person-data');
    const cardDataSection = document.getElementById('card-data');

    const continueBtn = document.getElementById('continueButton');
    const qtyInputs = document.querySelectorAll('.input-group-quantity')
    qtyInputs.forEach(group => {

        const minusBtn = group.querySelector('.btn-qty:first-of-type');
        const plusBtn = group.querySelector('.btn-qty:last-of-type');
        const qtyInput = group.querySelector('.form-control-qty');

        if (minusBtn && plusBtn && qtyInput) {
            minusBtn.addEventListener('click', () => {
                let currentVal = parseInt(qtyInput.value);
                if (!isNaN(currentVal) && currentVal > 0) {
                    qtyInput.value = currentVal - 1;
                    checkContinueButtonState();
                }
            });

            plusBtn.addEventListener('click', () => {
                let currentVal = parseInt(qtyInput.value);
                if (!isNaN(currentVal)) {
                    qtyInput.value = currentVal + 1;
                    checkContinueButtonState();
                } else {
                    qtyInput.value = 1;
                }
            });

            if (parseInt(group.value) > 0) {
                continueBtn.classlist.add('active');
            }
        }


    });

    continueBtn.addEventListener('click', () => {
    
        entradasContainer.classList.add('hidden');
    
        personalDataSection.classList.remove('hidden');

    });

    checkContinueButtonState();

    dataUser();

    const continueMethodPaid = document.getElementById('continueMethodPaid');
    const form = document.querySelector('#person-data form');

    function checkFormValidity() {
    
        continueMethodPaid.disabled = !form.checkValidity();
    }


    form.querySelectorAll('input, select').forEach(el => {
        el.addEventListener('input', checkFormValidity);
        el.addEventListener('change', checkFormValidity);
    });

    checkFormValidity();
    
    continueMethodPaid.addEventListener('click', (e) => {
        e.preventDefault();
        entradasContainer.classList.add('hidden');
        personalDataSection.classList.add('hidden');
        cardDataSection.classList.remove('hidden');
    });
});

function checkContinueButtonState() {
    const qtyInputs = document.querySelectorAll('.form-control-qty');
    const continueButton = document.getElementById('continueButton');
    let totalQuantity = 0;

    qtyInputs.forEach(input => {
        totalQuantity += parseInt(input.value || 0);
    });

    continueButton.disabled = totalQuantity <= 0;
}

const dataUser = () => {
    const resumenEntradasUl = document.querySelector('.purchase-detail-section .detail-item');
    const totalElement = document.querySelector('.purchase-detail-section .detail-total');

   
    const purchaseDetails = [
        { name: "Entradas Feria Córdoba", units: 4, price: 15000 },
        
    ];

    let totalCompra = 0;
    resumenEntradasUl.innerHTML = '';

    purchaseDetails.forEach(item => {
        const itemTotal = item.units * item.price;
        totalCompra += itemTotal;

        const liPrice = document.createElement('li');
        liPrice.textContent = `• ${item.name}: $ ${item.price.toLocaleString('es-AR')}`;
        resumenEntradasUl.appendChild(liPrice);

        const liUnits = document.createElement('li');
        liUnits.textContent = `• Unidades: ${item.units}`;
        resumenEntradasUl.appendChild(liUnits);
    });

    if (purchaseDetails.length === 0) {
        const liNoItems = document.createElement('li');
        liNoItems.textContent = 'No se han seleccionado entradas.';
        resumenEntradasUl.appendChild(liNoItems);
    }

    totalElement.textContent = `Total: $ ${totalCompra.toLocaleString('es-AR')}`;
}
