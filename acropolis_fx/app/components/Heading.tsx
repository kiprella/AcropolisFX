'use client';

interface HeadingProps {
    title: string;
    subtitle?: string;
    center?: boolean;
}




const Heading: React.FC<HeadingProps> = ({
    title,
    subtitle,
    center
}) => {
    return (
        <div className={center ? 'text-center' : 'text-start'}>
            <div className="text-2xl font-bold leading-24">
            {/* // text-2xl nieko nedaro: global.css yra veikiantis kodas */}
                {title}
            </div>
            <div className="font-light text-neutral-500 mt-2">
                {subtitle}
            </div>
        </div>
    )
}


export default Heading;