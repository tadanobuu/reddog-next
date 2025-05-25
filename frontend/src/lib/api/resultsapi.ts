type resultType = {
    rank: number,
    total: number
}

export const insertResults = async(score: number): Promise<resultType> => {

    const token: string | undefined = process.env.NEXT_PUBLIC_API_TOKEN
    if(!token){
        throw new Error("tokenが未定義です")
    }

    const res = await fetch(
        'https://reddog-next.onrender.com/results/' + score, {
            method: 'POST',
            headers: {
                "Authorization": token
            },
        } 
    )

    if(!res.ok){
        throw new Error("insertに失敗しました");
    }

    return res.json();
};
