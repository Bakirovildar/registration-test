import './personalInfoComponent.css'

interface IPersonalInfoComponent {
    headTitle: string
    children: React.ReactNode
}

export const PersonalInfoComponent = ({ headTitle, children }: IPersonalInfoComponent) => {
    return (
        <div className='personal-info'>
            <div className='personal-head'>{headTitle}</div>
            {children}
        </div>
    )
}