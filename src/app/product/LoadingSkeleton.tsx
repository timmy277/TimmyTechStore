// components/LoadingSkeleton.tsx
const LoadingSkeleton = () => {
    const loadingList = new Array(13).fill(null);

    return (
        <>
            {loadingList.map((_, index) => (
                <div className='max-w-full h-36 bg-white rounded-sm shadow flex xl:max-w-[20%] lg:max-w-[25%]' key={index}>
                    <div className='bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[145px] animate-pulse'></div>
                    <div className='grid w-full gap-2 p-4'>
                        <h2 className='p-1 text-base font-medium text-black rounded-full md:text-lg text-ellipsis line-clamp-1 bg-slate-200 animate-pulse'></h2>
                        <p className='p-1 capitalize rounded-full text-slate-500 bg-slate-200 animate-pulse'></p>
                        <div className='flex w-full gap-3'>
                            <p className='w-full p-1 font-medium text-red-600 rounded-full bg-slate-200 animate-pulse'></p>
                            <p className='w-full p-1 line-through rounded-full text-slate-500 bg-slate-200 animate-pulse'></p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default LoadingSkeleton;
