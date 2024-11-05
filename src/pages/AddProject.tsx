import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Input } from '../components/Input';
import { TextArea } from '../components/TextArea';
import { TagInput } from '../components/TagInput';
import { Button } from '../components/Button';

interface FormData {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

interface FormErrors {
  title?: string;
  description?: string;
  imageUrl?: string;
  tags?: string;
}

export function AddProject() {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    imageUrl: '',
    tags: [],
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    if (!formData.imageUrl.trim()) {
      newErrors.imageUrl = 'Image URL is required';
    } else if (!isValidUrl(formData.imageUrl)) {
      newErrors.imageUrl = 'Please enter a valid URL';
    }

    if (formData.tags.length === 0) {
      newErrors.tags = 'At least one tag is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      // Reset form after successful submission
      setFormData({
        title: '',
        description: '',
        imageUrl: '',
        tags: [],
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="mb-8">
          <a
            href="/"
            className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Portfolio
          </a>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-8">
          <h1 className="text-3xl font-bold mb-8">Add New Project</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Project Title"
              type="text"
              value={formData.title}
              onChange={e => setFormData({ ...formData, title: e.target.value })}
              error={errors.title}
              placeholder="Enter project title"
            />

            <TextArea
              label="Project Description"
              value={formData.description}
              onChange={e => setFormData({ ...formData, description: e.target.value })}
              error={errors.description}
              placeholder="Describe your project"
              rows={4}
            />

            <Input
              label="Image URL"
              type="url"
              value={formData.imageUrl}
              onChange={e => setFormData({ ...formData, imageUrl: e.target.value })}
              error={errors.imageUrl}
              placeholder="https://example.com/image.jpg"
            />

            <TagInput
              label="Technologies Used"
              tags={formData.tags}
              onChange={tags => setFormData({ ...formData, tags })}
              error={errors.tags}
            />

            <div className="flex gap-4">
              <Button type="submit">
                Add Project
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={() => setFormData({
                  title: '',
                  description: '',
                  imageUrl: '',
                  tags: [],
                })}
              >
                Clear Form
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}