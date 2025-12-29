import sys
import os

# Add src to path
sys.path.append(os.path.abspath("src"))

try:
    from apps.comic_gen import api
    from apps.comic_gen import pipeline
    print("Backend modules imported successfully.")
except Exception as e:
    print(f"Error importing backend modules: {e}")
    sys.exit(1)
