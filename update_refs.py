import os

file_path = r'c:\Users\anyth\Desktop\REFEREES\src\content\referees.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

new_refs = """export const referees: Referee[] = [
  {
    id: 'ref-01',
    slug: 'jonathan-evans',
    name: 'Jonathan Evans',
    role: 'Co-founder & Match Referee',
    region: 'South Wales',
    formats: ['Sevens', 'Fifteens'],
    shortBio: 'Co-founder with 8 years of refereeing experience.',
    fullBio: 'Jonathan Evans is a co-founder with 8 years of refereeing experience. Based in South Wales, his best times over the last 4 years have been at Heart of Wales. Fun fact: He loves a pint.',
    image: '/assets/referees/jonathan-evans.jpg',
    featured: true,
    available: true,
    order: 1,
  },
  {
    id: 'ref-02',
    slug: 'jamie-watkins',
    name: 'Jamie Watkins',
    role: 'Co-founder & Match Referee',
    region: 'Trebanos',
    formats: ['Sevens', 'Fifteens'],
    shortBio: 'Co-founder with 10 years of refereeing experience.',
    fullBio: 'Jamie Watkins is a co-founder from Trebanos with 10 years of overall experience, including 3 years at level 2. Fun fact: He can run 100m in 1 hour 🤣.',
    image: '/assets/referees/jamie-watkins.jpg',
    featured: true,
    available: true,
    order: 2,
  },
  {
    id: 'ref-03',
    slug: 'rob-brooks',
    name: 'Rob Brooks',
    role: 'Match Referee',
    region: 'Alltwen, South Wales',
    formats: ['Sevens', 'Fifteens'],
    shortBio: 'Original member with 10+ years of refereeing experience.',
    fullBio: 'Rob Brooks is an original member from Alltwen with 10+ years of refereeing experience. Fun fact: He is known to wear two "RIGHT" footed socks for obvious reasons!',
    image: '/assets/referees/rob-brooks.jpg',
    featured: true,
    available: true,
    order: 3,
  },
  {
    id: 'ref-04',
    slug: 'paul-thomas',
    name: 'Paul Thomas',
    role: 'Match Referee',
    region: 'Blaendulais',
    formats: ['Sevens', 'Fifteens'],
    shortBio: 'Experienced match referee who is still young enough to cartwheel.',
    fullBio: 'Paul Thomas, hailing from Blaendulais, has "lots" of years of refereeing experience under his belt. Fun fact: He is still young enough to cartwheel.',
    image: '/assets/referees/paul-thomas.jpg',
    featured: true,
    available: true,
    order: 4,
  },
  {
    id: 'ref-05',
    slug: 'alex-yau',
    name: 'Alex Yau',
    role: 'Co-founder & Match Referee',
    region: 'Ceredigion',
    formats: ['Sevens', 'Fifteens'],
    shortBio: 'An adopted Welshman with 20+ years of experience.',
    fullBio: 'Alex Yau is a co-founder and one of the originals. Describing himself as Migrant English, Chinese, Scottish, Japanese & Italian, he is an adopted Welshman residing in Ceredigion. With 20+ years of experience and still learning, he will officiate anywhere and everywhere. Just give him 2 teams to chase and a pitch to run around with his whistle.',
    image: '/assets/referees/alex-yau.jpg',
    featured: true,
    available: true,
    order: 5,
  },
  {
    id: 'ref-06',
    slug: 'rob-lowe',
    name: 'Rob Lowe',
    role: 'Match Referee',
    region: 'Cornwall',
    formats: ['Sevens', 'Fifteens'],
    shortBio: 'HOW7s Celtic family member with 11 years of experience.',
    fullBio: 'Rob Lowe is from Cornwall and has 11 years of refereeing experience. He joined his Celtic family at HOW7s. Fun fact: He wears the same pair of pants to ref in, his "lucky ducks".',
    image: '/assets/referees/rob-lowe.jpg',
    featured: true,
    available: true,
    order: 6,
  },
  {
    id: 'ref-07',
    slug: 'lucy-rees',
    name: 'Lucy Rees',
    role: 'Match Referee',
    region: 'Wales',
    formats: ['Sevens', 'Fifteens'],
    shortBio: 'Level 3 referee who joined to develop skills and nag the men.',
    fullBio: 'Lucy Rees has been refereeing for 2 years and is a level 3 official. She joined the Dysfunctionals last year to develop her skills and nag the men. Fun fact: She played and officiated at the Principality Stadium on the same day.',
    image: '/assets/referees/lucy-rees.jpg',
    featured: false,
    available: true,
    order: 7,
  }"""

start_idx = content.find("export const referees: Referee[] = [")
end_idx = content.find("  {\n    id: 'ref-08',")

if start_idx != -1 and end_idx != -1:
    new_content = content[:start_idx] + new_refs + ",\n" + content[end_idx:]
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully updated referees.ts")
else:
    print(f"Error: Could not find insertion points. start_idx={start_idx}, end_idx={end_idx}")
