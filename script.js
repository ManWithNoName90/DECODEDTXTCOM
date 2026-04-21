document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('codeInput');
    
    // Auto-focus en el input al cargar
    input.focus();
    
    // Mantener focus si hacen clic fuera
    document.addEventListener('click', function(e) {
        if (e.target !== input) {
            input.focus();
        }
    });
    
    // Detectar Enter
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const value = input.value.trim().toUpperCase();
            if (value) {
                // Por ahora (Bloque 1) solo mostramos alerta
                // En Bloque 2 redirigiremos a /S-017
                alert('Código recibido: ' + value + '\n\nEn el Bloque 2 esto te llevará al mensaje decodificado.');
                input.value = '';
            }
        }
    });
    
    // Convertir a mayúsculas automáticamente
    input.addEventListener('input', function() {
        this.value = this.value.toUpperCase();
    });
});