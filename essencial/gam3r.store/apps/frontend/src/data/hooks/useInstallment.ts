import { CalculateInstallment, Max_Number_Installments } from '@gstore/core'

export default function useInstallment(value: number, quantidade: number = Max_Number_Installments) {
    return new CalculateInstallment().executar(value, quantidade)
}
