export const buttonStyle = {
	default: {
		button:
			'bg-[#002147] text-white rounded py-[10px] px-[20px] hover:bg-[#009E60] duration-300',
	},
	hiddenSpan: {
		button:
			'text-white flex items-center gap-x-2.5 hover:bg-[#009E60] duration-300 rounded py-[10px] px-[20px]',
		span: 'hidden sm:inline',
	},
	positionAbsolute: {
		button: 'absolute right-[-35px] bg-[#222935] p-3 rounded-r-lg z-10',
	},
	positionFixed: {
		button: 'fixed right-10 bottom-0 bg-[#222935] p-3 rounded-t-lg z-10',
	},
	rounded: {
		button: 'bg-[#009E60] text-white rounded-full py-1 px-4',
	},
};
