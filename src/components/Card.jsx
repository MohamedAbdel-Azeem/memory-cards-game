export function Card({name,image,onImageLoad}){
    return (
        <div className='p-3 cursor-pointer bg-slate-200 rounded-lg flex flex-col items-center justify-center gap-2 shadow-lg hover:shadow-slate-300 drop-shadow-xl'>
            <img src={image} alt={name} className='max-md:size-20 size-48 border border-slate-950 rounded-full' onLoad={onImageLoad}/>
            <p className='text-slate-950 text-lg font-mono font-medium text-center'>{name}</p>
        </div>
    );
}