import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";
import IconSearch from '../../assets/img/icon-search.svg'
import ButtonArrowSmall from '../../assets/img/arrow-small.svg';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const eventos = [
	{
		type: "verano",
		dates: [ // Rango 1 - 22 septiembre
			...Array.from({ length: 22 }, (_, i) => new Date(2025, 8, i + 1)),
		],
	},
	{
		type: "escolar",
		dates: [new Date(2025, 8, 24), new Date(2025, 9, 1)], // 24 Septiembre
	},
	{
		type: "conservacion",
		dates: [new Date(2025, 8, 27), new Date(2025, 9, 4)], // 27 Septiembre
	},
];

const CalendarCustom = () => {
	const [value, setValue] = useState<Value>(new Date());
	const getTileClass = ({ date }: { date: Date }) => {
		if (eventos[0].dates.some(d => d.toDateString() === date.toDateString())) {
			return "bg-yellow";
		}
		if (eventos[1].dates.some(d => d.toDateString() === date.toDateString())) {
			return "bg-gray";
		}
		if (eventos[2].dates.some(d => d.toDateString() === date.toDateString())) {
			return "bg-green";
		}
		return "";
	};
	return (
		<div>
			<div>
				<div className='flex items-center'>
					<div className='w-[23px] h-[23px] bg-[#FEB826] mr-2'></div>
					<p className='montserrat-600 text-principal text-[22px]'>Temporada de verano.</p>
				</div>
				<div className='flex items-center'>
					<div className='w-[23px] h-[23px] bg-[#CEC5A8] mr-2'></div>
					<p className='montserrat-600 text-principal text-[22px]'>Miércoles escolares (descuentos para grupos educativos).</p>
				</div>
				<div className='flex items-center'>
					<div className='w-[23px] h-[23px] bg-green mr-2'></div>
					<p className='montserrat-600 text-principal text-[22px]'>Eventos de conservación (charlas y talleres).</p>
				</div>
			</div>
			<p className='montserrat-600 text-principal text-[40px] text-center my-6'>Eventos para Septiembre 2025</p>
			<div className='flex justify-between h-[70px] border border-gray mb-8'>
				<div className='flex items-center px-4'>
					<img src={IconSearch} alt="" />
					<input type="text" className='outline-none montserrat-600 text-principal text-[22px]' />
				</div>
				<div className='flex gap-4 items-center px-4'>
					<div className='button button--secondary font-ruina h-[46px]'>Buscar eventos</div>
					<div className='flex justify-center items-center border-b border-green h-full montserrat-600 text-principal text-[16px] cursor-pointer'>Lista</div>
					<div className='flex justify-center items-center border-green h-full montserrat-600 text-principal text-[16px] cursor-pointer'>Mes</div>
					<div className='flex justify-center items-center border-green h-full montserrat-600 text-principal text-[16px] cursor-pointer'>Día</div>
				</div>
			</div>
			<div className="flex justify-center mb-4">
				<img src={ButtonArrowSmall} alt="" className="w-[16px] invert rotate-90" />
			</div>
			<Calendar
				onChange={setValue}
				value={value}
				view="month"
				defaultActiveStartDate={new Date(2025, 8, 1)} // Septiembre 2025
				locale="es-ES"
				tileClassName={getTileClass}
			/>
			<div className="flex justify-end mt-10">
				<div className='button button--secondary font-ruina h-[46px]'>Suscribirse al calendario</div>
			</div>
		</div>
	)
}

export default CalendarCustom