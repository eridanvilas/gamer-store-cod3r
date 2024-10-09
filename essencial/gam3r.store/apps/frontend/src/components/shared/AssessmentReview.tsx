import { IconStar, IconStarFilled, IconStarHalfFilled } from '@tabler/icons-react'

export interface AssessmentReviewProps {
    assessment: number
    size?: number
}

export default function AssessmentReview(props: AssessmentReviewProps) {
    function AssessmentByStars(assessment: number) {
        const stars = []
        for (let i = 1; i <= 5; i++) {
            if (assessment >= i) {
                stars.push(<IconStarFilled size={props.size ?? 12} />)
            } else if (assessment >= i - 0.5) {
                stars.push(<IconStarHalfFilled size={props.size ?? 12} />)
            } else {
                stars.push(<IconStar size={props.size ?? 12} />)
            }
        }
        return stars
    }

    return <div className="flex gap-0.5 text-emerald-400">{AssessmentByStars(props.assessment)}</div>
}
