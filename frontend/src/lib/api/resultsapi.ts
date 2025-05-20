
export const insertResults = async(score: number): Promise<void> => {
    const res = await fetch(
        'http://localhost:8080/results/' + score, {
            method: 'POST'
        } 
    )

    if(!res.ok){
        throw new Error("insertに失敗しました");
    }
};
