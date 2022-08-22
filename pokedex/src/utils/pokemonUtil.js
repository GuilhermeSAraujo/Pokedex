import {
	Grass,
	Bug,
	Dark,
	Dragon,
	Electric,
	Fairy,
	Fighting,
	Fire,
	Flying,
	Ghost,
	Ground,
	Ice,
	Normal,
	Poison,
	Psychic,
	Rock,
	Steel,
	Unknown,
	Water
} from '../assets/tipos'

const tiposPokemon = [
	{
		name: "normal",
		icon: Normal,
		url: "https://pokeapi.co/api/v2/type/1/",
	},
	{
		name: "fighting",
		icon: Fighting,
		url: "https://pokeapi.co/api/v2/type/2/"
	},
	{
		name: "flying",
		icon: Flying,
		url: "https://pokeapi.co/api/v2/type/3/"
	},
	{
		name: "poison",
		icon: Poison,
		url: "https://pokeapi.co/api/v2/type/4/"
	},
	{
		name: "ground",
		icon: Ground,
		url: "https://pokeapi.co/api/v2/type/5/"
	},
	{
		name: "rock",
		icon: Rock,
		url: "https://pokeapi.co/api/v2/type/6/"
	},
	{
		name: "bug",
		icon: Bug,
		url: "https://pokeapi.co/api/v2/type/7/",
	},
	{
		name: "ghost",
		icon: Ghost,
		url: "https://pokeapi.co/api/v2/type/8/"
	},
	{
		name: "steel",
		icon: Steel,
		url: "https://pokeapi.co/api/v2/type/9/"
	},
	{
		name: "fire",
		icon: Fire,
		url: "https://pokeapi.co/api/v2/type/10/"
	},
	{
		name: "water",
		icon: Water,
		url: "https://pokeapi.co/api/v2/type/11/"
	},
	{
		name: "grass",
		icon: Grass,
		url: "https://pokeapi.co/api/v2/type/12/"
	},
	{
		name: "electric",
		icon: Electric,
		url: "https://pokeapi.co/api/v2/type/13/"
	},
	{
		name: "psychic",
		icon: Psychic,
		url: "https://pokeapi.co/api/v2/type/14/"
	},
	{
		name: "ice",
		icon: Ice,
		url: "https://pokeapi.co/api/v2/type/15/"
	},
	{
		name: "dragon",
		icon: Dragon,
		url: "https://pokeapi.co/api/v2/type/16/"
	},
	{
		name: "dark",
		icon: Dark,
		url: "https://pokeapi.co/api/v2/type/17/"
	},
	{
		name: "fairy",
		icon: Fairy,
		url: "https://pokeapi.co/api/v2/type/18/"
	},
	{
		name: "unknown",
		icon: Unknown,
		url: "https://pokeapi.co/api/v2/type/10001/"
	},
	{
		name: "shadow",
		url: "https://pokeapi.co/api/v2/type/10002/"
	}
];

const obtemTipo = (tipoBusca) => {
	let resultadoBusca = tiposPokemon.find(tipo => tipo.name.includes(tipoBusca));
	return resultadoBusca;
}

const tiposStat = [
	{
		name: 'hp',
		icon: '❤️'
	},
	{
		name: 'attack',
		icon: '💥'
	},
	{
		name: 'defense',
		icon: '🛡️'
	},
	{
		name: 'special-attack',
		icon: '☠️'
	},
	{
		name: 'special-defense',
		icon: '💊' //🩸
	},
	{
		name: 'speed',
		icon: '💨'
	},
]
const obtemStat = (stat) => {
	return tiposStat.find(tipo => tipo.name === stat).icon;
}

export { obtemTipo, obtemStat }