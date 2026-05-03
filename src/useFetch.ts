import { useEffect } from 'react'

function useFetch<T>(url: string, setter: (data: T[]) => void, interval?: boolean) {
    useEffect(() => {
        const buscar = () => {
            fetch(url, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(res => res.json())
            .then(data => { setter(Array.isArray(data) ? data : [])
            })
        }

        buscar()

        if (interval) {
            const intervalo = setInterval(buscar, 30000)
            return () => clearInterval(intervalo)
        }
    }, [])
}

export default useFetch