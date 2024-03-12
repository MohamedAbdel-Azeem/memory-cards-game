export function Game({cards}){
    return (
        <div>
            <div className="flex flex-wrap justify-center gap-4">
                {cards}
            </div>
        </div>
    );
}