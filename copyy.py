import os

# 📌 Folder where your portfolio files are
PORTFOLIO_FOLDER = os.path.dirname(os.path.abspath(__file__))

OUTPUT_FILE = "portfolio_all_code.txt"


def collect_portfolio_files(folder_path, output_file):
    with open(output_file, "w", encoding="utf-8") as outfile:

        for root, dirs, files in os.walk(folder_path):
            for file in files:

                # ✅ Only collect web files
                if file.endswith((".html", ".css", ".js")):
                    file_path = os.path.join(root, file)

                    try:
                        with open(file_path, "r", encoding="utf-8") as infile:
                            content = infile.read()

                        outfile.write("\n" + "="*80 + "\n")
                        outfile.write(f"FILE: {file_path}\n")
                        outfile.write("="*80 + "\n\n")
                        outfile.write(content + "\n\n")

                    except Exception as e:
                        print(f"❌ Error reading {file_path}: {e}")

    print(f"\n✅ All portfolio files saved in: {output_file}")


# ▶ Run
collect_portfolio_files(PORTFOLIO_FOLDER, OUTPUT_FILE)