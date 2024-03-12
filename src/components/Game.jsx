export function Game({cards}){
    return (
        <div>
            <div className="flex flex-wrap justify-center gap-4 px-8 py-10">
                {cards}
            </div>
        </div>
    );
}