def compute_candidate_score(candidate: dict, job: dict) -> float:
    candidate_skills = set(candidate.get("skills", []))
    required_skills = set(job.get("required_skills", []))

    if not required_skills:
        return 0.0

    match = len(candidate_skills.intersection(required_skills))
    score = (match / len(required_skills)) * 100

    return round(score, 2)


def match_candidates(candidates: list, job: dict):
    results = []

    for c in candidates:
        score = compute_candidate_score(c, job)

        results.append({
            "name": c.get("name"),
            "score": score,
            "skills": c.get("skills", [])
        })

    return sorted(results, key=lambda x: x["score"], reverse=True)