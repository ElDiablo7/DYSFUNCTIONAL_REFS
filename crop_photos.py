"""
Crop and copy referee profile photos to /public/assets/referees/
"""
from PIL import Image
import os
import shutil

OUT_DIR = r"c:\Users\anyth\Desktop\REFEREES\public\assets\referees"
PROFILES = r"c:\Users\anyth\Desktop\REFEREES\refs_profiles"

os.makedirs(OUT_DIR, exist_ok=True)

# ---- ref1: Jonathan Evans ----
# Photo has big black bars top/bottom and a red strip on the left
img = Image.open(os.path.join(PROFILES, "ref1", "WhatsApp Image 2026-07-15 at 19.33.30.jpeg"))
w, h = img.size
# Crop to remove black bars (top ~22%, bottom ~8%, left ~8%)
left = int(w * 0.08)
top = int(h * 0.22)
right = w
bottom = int(h * 0.92)
cropped = img.crop((left, top, right, bottom))
cropped.save(os.path.join(OUT_DIR, "jonathan-evans.jpg"), "JPEG", quality=92)
print(f"OK: jonathan-evans.jpg saved ({cropped.size})")

# ---- ref2: Jamie Watkins ----
# WhatsApp screenshot - need to crop out the windsurf photo
# The photo is roughly in the lower half of the image
img = Image.open(os.path.join(PROFILES, "ref2", "WhatsApp Image 2026-07-15 at 19.36.50.jpeg"))
w, h = img.size
# The windsurfing photo starts at roughly 42% from top and ends at ~82%
# Left starts at about 13%, right at about 76%
left = int(w * 0.13)
top = int(h * 0.42)
right = int(w * 0.76)
bottom = int(h * 0.82)
cropped = img.crop((left, top, right, bottom))
cropped.save(os.path.join(OUT_DIR, "jamie-watkins.jpg"), "JPEG", quality=92)
print(f"OK: jamie-watkins.jpg saved ({cropped.size})")

# ---- ref3: Rob Brooks ----
# Clean action photo, just minor crop at top (black oval) and slight right edge
img = Image.open(os.path.join(PROFILES, "ref3", "WhatsApp Image 2026-07-15 at 19.35.27.jpeg"))
w, h = img.size
# Crop top ~3% and right ~5%
left = 0
top = int(h * 0.03)
right = int(w * 0.95)
bottom = h
cropped = img.crop((left, top, right, bottom))
cropped.save(os.path.join(OUT_DIR, "rob-brooks.jpg"), "JPEG", quality=92)
print(f"OK: rob-brooks.jpg saved ({cropped.size})")

# ---- ref4: Paul Thomas ----
# WhatsApp screenshot with Mighty Refs meme - crop the meme card
img = Image.open(os.path.join(PROFILES, "ref4", "WhatsApp Image 2026-07-15 at 20.16.34.jpeg"))
w, h = img.size
# The meme card runs from about 15% to 76% horizontally, 25% to 67% vertically
left = int(w * 0.15)
top = int(h * 0.25)
right = int(w * 0.76)
bottom = int(h * 0.67)
cropped = img.crop((left, top, right, bottom))
cropped.save(os.path.join(OUT_DIR, "paul-thomas.jpg"), "JPEG", quality=92)
print(f"OK: paul-thomas.jpg saved ({cropped.size})")

# ---- ref5: Alex Yau ----
# Clean action shot, good as-is - just copy
img = Image.open(os.path.join(PROFILES, "ref5", "WhatsApp Image 2026-07-15 at 19.43.47.jpeg"))
img.save(os.path.join(OUT_DIR, "alex-yau.jpg"), "JPEG", quality=92)
print(f"OK: alex-yau.jpg saved ({img.size})")

# ---- ref6: Rob Lowe ----
# Clean headshot from ref6 folder
img = Image.open(os.path.join(PROFILES, "ref6", "WhatsApp Image 2026-07-15 at 19.43.30.jpeg"))
img.save(os.path.join(OUT_DIR, "rob-lowe.jpg"), "JPEG", quality=92)
print(f"OK: rob-lowe.jpg saved ({img.size})")

# ---- ref7: Lucy Rees ----
# Clean stadium photo, good as-is
img = Image.open(os.path.join(PROFILES, "ref7", "WhatsApp Image 2026-07-15 at 20.02.34.jpeg"))
img.save(os.path.join(OUT_DIR, "lucy-rees.jpg"), "JPEG", quality=92)
print(f"OK: lucy-rees.jpg saved ({img.size})")

print("\nAll 7 referee photos processed!")
