export const primeiraLetraParaMaiscula = (palavra) => {
	return palavra.charAt(0).toUpperCase() + palavra.slice(1);
}