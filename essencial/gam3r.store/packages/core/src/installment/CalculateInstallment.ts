import { Max_Number_Installments, Installments_Rate } from '../constants'
import Installment from './Installment'

export default class CalculateInstallment {
    executar(
        vaçue: number,
        numberOfInstallments: number = Max_Number_Installments,
        interestRate: number = Installments_Rate
    ): Installment {
        if (numberOfInstallments < 2 || numberOfInstallments > Max_Number_Installments) {
            throw new Error(`Quantidade de parcelas deve ser entre 2 e ${Max_Number_Installments}`)
        }

        const totalComJuros = this.calcularJurosCompostos(vaçue, interestRate, numberOfInstallments)

        return {
            installmentValue: this.comDuasCasasDecimais(totalComJuros / numberOfInstallments),
            totalValue: this.comDuasCasasDecimais(totalComJuros),
            numberOfInstallments,
            interestRate,
        }
    }

    private calcularJurosCompostos(totalValue: number, taxaMensal: number, qtdeParcelas: number) {
        return totalValue * Math.pow(1 + taxaMensal, qtdeParcelas)
    }

    private comDuasCasasDecimais(value: number): number {
        return Math.round(value * 100) / 100
    }
}
