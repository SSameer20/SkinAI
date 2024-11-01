import tkinter as tk

# Create the main application window
root = tk.Tk()
root.title("Simple Tkinter App")
root.geometry("300x200")  # Set the window size

# Define the function to update the label text
def update_label():
    label.config(text="Hello, Tkinter!")

# Create a label widget
label = tk.Label(root, text="Click the button!")
label.pack(pady=20)  # Add padding for spacing

# Create a button widget
button = tk.Button(root, text="Click Me", command=update_label)
button.pack(pady=10)  # Add padding for spacing

# Run the application
root.mainloop()
