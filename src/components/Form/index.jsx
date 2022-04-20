import { TextField, Button, Box} from "@mui/material"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from "axios"
import { toast } from "react-toastify"
import { useState } from "react"
import Card from "../Card"
import {CustomForm} from './style'


const Form = () =>{

    const [resposta, setResposta] = useState([])

    const schema = yup.object().shape({
        nomeRepo: yup.string().required('Preencha o campo').trim()
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) =>{
        const arr = data.nomeRepo.split('/')
        axios.get(`https://api.github.com/repos/${arr[0]}/${arr[1]}`)
        .then((response)=> {
            toast.success('Sucesso')
            setResposta([...resposta, response])
        })
        .catch((err) => {
            toast.error("Erro na Requisição")
        })  
    }
    return(
        <>
        <CustomForm component="form" onSubmit={handleSubmit(onSubmit)}>
            <TextField 
            type="text"
            variant="outlined"
            label="Digite o nome do repositório"
            {...register("nomeRepo")}
            helperText={errors.nomeRepo?.message}
            error={!!errors.nomeRepo}
            />

        <Button type='submit' variant="contained">Pesquisar</Button>
        </CustomForm>

        
        <Box component="div">
        {resposta&& resposta.map(({data, id}) => <Card key={id} resposta={data}/>)}
        </Box>
        </>
    )
}

export default Form