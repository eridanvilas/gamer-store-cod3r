
import Foot from './Foot'
import Header from './Header'

export interface PaginaProps {
    className?: string
    children: any
    semCabecalho?: boolean
    semRodape?: boolean
    semContainer?: boolean
    semPadding?: boolean
}

export default function Page(props: PaginaProps) {
    return (
        <div
            className="flex flex-col min-h-screen"
            style={{
                background: 'radial-gradient(50% 50% at 50% 50%, #2d0064 0%, #0d001c 100%)',
            }}
        >
            <div
                className="flex-1 flex flex-col w-screen"
                style={{ background: 'url("/background.png")' }}
            >
                {props.semCabecalho ? null : <Header />}
                <main
                    className={`
                        flex-1 flex flex-col ${props.className ?? ''}
                        ${props.semContainer ? '' : 'container'}
                        ${props.semPadding ? '' : 'py-10'}
                    `}
                >
                    {props.children}
                </main>
                {props.semRodape ? null : <Foot />}
            </div>
        </div>
    )
}
