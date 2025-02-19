interface TitleHeaderProps {
    text: string;

}

const TitleHeader = ({ text }: TitleHeaderProps) => {
  return (
    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">{text}</h1>
  )
}

export default TitleHeader